import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, [postId]);
  return (
    <div className={styles.comments}>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p className="text-xl">{comment.name}</p>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </div>
  );
}
