import React from "react";


export default function BlogPost(props) {
  return (
    <div className="posts">
      {props.post.title}
      {props.post.subTitle}
      {props.post.author}
      {props.post.date}
      <hr/>
    </div>
  );
}
