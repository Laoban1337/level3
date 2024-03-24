import React from "react";
import data from "../data";
import BlogPosts from "./BlogPosts";

export default function BlogList() {
  const blogElements = data.map((post) => {
    return <BlogPosts key={post.id} post={post} />;
  });

  return <div className="post-container">{blogElements}</div>;
}
