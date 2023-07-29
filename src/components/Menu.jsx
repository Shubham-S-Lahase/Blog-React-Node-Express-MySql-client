import React from "react";

const Menu = () => {
  const data = [
    {
      id: 1,
      title: "my first post",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem perferendis repellat eaque deleniti doloremque natus expeditavoluptatum obcaecati.",
      img: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "my first post",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem perferendis repellat eaque deleniti doloremque natus expeditavoluptatum obcaecati.",
      img: "https://images.pexels.com/photos/5023937/pexels-photo-5023937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "my first post",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem perferendis repellat eaque deleniti doloremque natus expeditavoluptatum obcaecati.",
      img: "https://images.pexels.com/photos/4157474/pexels-photo-4157474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "my first post",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem perferendis repellat eaque deleniti doloremque natus expeditavoluptatum obcaecati.",
      img: "https://images.pexels.com/photos/3932410/pexels-photo-3932410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return <div className="menu">
    <h1>Other posts you may like</h1>
    {data.map((post) => (
        <div className="post" key={post.id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read More</button>
        </div>
    ))}
  </div>;
};

export default Menu;
