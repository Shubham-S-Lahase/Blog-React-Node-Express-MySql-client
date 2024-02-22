import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

const Single = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
        const commentsRes = await axios.get(`/post/${postId}/comments`);
        setComments(commentsRes.data);
        const likeRes = await axios.post("/checkUserLike", { post_id: postId, user_id: currentUser.id });
        setIsLiked(likeRes.data.isLikedByCurrentUser);
        const likesRes = await axios.get(`/${postId}/likes`);
        setLikes(likesRes.data.totalLikes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId, currentUser.id]);
  
  

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmed) {
      try {
        await axios.delete(`/posts/${postId}`);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleAddComment = async (text, event) => {
    try {
      const response = await axios.post("/comments/add", {
        post_id: postId,
        user_id: currentUser.id,
        text,
      });
      // Use the id returned by the server
      const newComment = { id: response.data.id, text, username: currentUser.username, user_id: currentUser.id };
      setComments([...comments, newComment]);
      event.target.elements.comment.value = "";
    } catch (err) {
      console.log(err);
    }
  };
    

  const handleDeleteComment = async (id) => {
    try {
      await axios.delete(`/comments/${id}`);
      setComments(comments.filter((comment) => comment.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const toggleLike = async () => {
    try {
      const response = await axios.post("/like", {
        post_id: postId,
        user_id: currentUser.id,
      });
      setLikes(response.data.totalLikes);
      setIsLiked(!isLiked);
    } catch (err) {
      console.log(err);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="single">
      <div className="content">
        <img src={`../upload/${post?.img}`} alt="" />
        <div className="user">
          {post.userImg && <img src={`../upload/${post.userImg}`} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={require("../img/edit.webp")} alt="" />
              </Link>
              <img
                src={require("../img/delete.jpg")}
                alt=""
                onClick={handleDelete}
              />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {getText(post.desc)}
        <div className="likes">
          <p>{likes} likes</p>
          <img
            src={
              isLiked
                ? require("../img/fheart.png")
                : require("../img/theart.png")
            }
            alt=""
            onClick={toggleLike}
          />
        </div>

        <div className="comments">
          <h5>Comments</h5>
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <div className="c1">
                {/* {console.log(comment.user_id)} */}
                <span id="user">{comment.username} :</span>
                <span>{comment.text}</span>
              </div>
              <div className="c2">
                {currentUser.id === comment.user_id && (
                  <img
                    src={require("../img/delete.jpg")}
                    alt=""
                    onClick={() => handleDeleteComment(comment.id)}
                  />
                )}
              </div>
            </div>
          ))}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddComment(e.target.elements.comment.value, e);
            }}
          >
            <input type="text" name="comment" placeholder="comment" />
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
