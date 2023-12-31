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

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
        const commentsRes = await axios.get(`/post/${postId}/comments`);
        setComments(commentsRes.data);
        const likesRes = await axios.get(`/post/${postId}/likes`);
        setLikes(likesRes.data.count);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddComment = async (text) => {
    try {
      await axios.post("/comments/add", {
        post_id: postId,
        user_id: currentUser.id,
        text,
      });
      setComments([...comments, { text }]);
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

  const handleLike = async () => {
    try {
      await axios.post("/likes/like", {
        post_id: postId,
        user_id: currentUser.id,
      });
      setLikes(likes + 1);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axios.delete("/likes/like", {
        data: { post_id: postId, user_id: currentUser.id },
      });
      setLikes(likes - 1);
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
          {post.userImg && <img src={`../upload/${currentUser?.img}`} alt="" />}
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
          <img src={require("../img/Like.png")} alt="" onClick={handleLike} />
          <img
            src={require("../img/Dislike.png")}
            alt=""
            onClick={handleUnlike}
          />
        </div>
        <div className="comments">
          <h5>Comments</h5>
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <div className="c1">
                <span id="user">{comment.username} :</span>
                <span>{comment.text}</span>
              </div>
              <div className="c2">
                <span>Posted {moment(comment.timestamp).fromNow()}</span>
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
              handleAddComment(e.target.elements.comment.value);
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
