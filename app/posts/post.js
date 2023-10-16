import { useState } from "react";
import styles from "./styles.module.css";
import Comments from "./comments";

export default function Post({ post }) {
  const [showComments, setShowComments] = useState(false);

  const showCommentsHandler = () => {
    setShowComments(!showComments);
  };
  return (
    <div className={styles.container}>
      <h2 className="text-2xl">{post.title}</h2>
      <p>{post.body}</p>
      <button className="btn" onClick={showCommentsHandler}>
        {!showComments ? "Show Comments" : "Hide Comments"}
      </button>
      {showComments && <Comments postId={post.id}></Comments>}
    </div>
  );
}
