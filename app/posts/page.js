"use client";

import { useEffect, useState } from "react";

import Post from "./post";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  console.log(posts);

  return (
    <>
      <h1 className="text-4xl text-center">POSTS PAGE</h1>

      {posts.map((post) => {
        return <Post key={post.id} post={post}></Post>;
      })}
    </>
  );
}
