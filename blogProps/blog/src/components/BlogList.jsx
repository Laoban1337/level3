import React from "react";
import BlogPost from "./BlogPost";
import data from "./data";

export default function BlogList() {
  const blogElements = data.map((post) => {
    return <BlogPost key={post.id} post={post} />;
  });

  return <div>{blogElements}</div>;
}
