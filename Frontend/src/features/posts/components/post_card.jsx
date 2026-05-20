import React from "react";

import {
  likePostApiCall,
  unLikePostApiCall,
} from "../../../services/likes/like.api";

import { toast } from "react-toastify";

const Post_Card = ({ post }) => {
  const likeHandler = async () => {
    try {
      await likePostApiCall({
        postId: post._id,
      });

      toast.success("Post Liked");
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  const unLikeHandler = async () => {
    try {
      await unLikePostApiCall({
        postId: post._id,
      });

      toast.success("Post Unliked");
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="post-card">
      <div className="post-user-details">
        <img src={post.user?.profile_image} alt="profile" width={40} />

        <h3>{post.user?.username}</h3>
      </div>

      <img src={post.post_image} alt="post" width={300} />

      <p>{post.caption}</p>

      <div className="post-actions">
        <button onClick={likeHandler}>Like</button>

        <button onClick={unLikeHandler}>Unlike</button>
      </div>
    </div>
  );
};

export default Post_Card;
