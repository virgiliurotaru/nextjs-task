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
      <span className={styles.date}>2023 October 23</span>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.bodyContent}>{post.body}</p>

      <button className="btn" onClick={showCommentsHandler}>
        {!showComments ? "Show Comments" : "Hide Comments"}
      </button>
      {showComments && <Comments postId={post.id}></Comments>}
    </div>
  );
}
