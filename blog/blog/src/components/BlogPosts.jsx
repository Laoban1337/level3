import React from "react";

export default function BlogPosts(props) {
  return (
    <div className="posts">
      <a href="#">
        <h1 className="post-title"> {props.post.title} </h1>
        <p> {props.post.subTitle}</p>
      </a>
      <p> posted by: {props.post.author}</p>
      <p> date: {props.post.date}</p>
      <hr />
    </div>
  );
}
