import React, { useState } from "react";

import { toast } from "react-toastify";

import { createCommentApiCall } from "../../../services/comments/comment.api";

const Comment_Form = ({ postId, getComments }) => {
  const [comment, setComment] = useState("");

  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (comment.trim() === "") {
      return toast.error("Comment is Required");
    }

    try {
      setLoading(true);

      await createCommentApiCall({
        postId,
        comment,
      });

      toast.success("Comment Added Successfully");

      setComment("");

      getComments();
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="comment-form-container">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Write Comment"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />

        <button disabled={loading}>{loading ? "Posting..." : "Comment"}</button>
      </form>
    </div>
  );
};

export default Comment_Form;
