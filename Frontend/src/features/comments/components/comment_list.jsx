import React from "react";

import useComments from "../hooks/useComments";

const Comment_List = ({ postId }) => {
  const { comments, loading, getComments } = useComments({
    postId,
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="comment-list-container">
      {comments.map((comment) => (
        <div key={comment._id} className="comment-card">
          <h4>{comment.user?.username}</h4>

          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Comment_List;
