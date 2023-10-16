import { useEffect, useState } from "react";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, []);
  return (
    <>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p className="text-2xl"> {comment.name} </p>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </>
  );
}
