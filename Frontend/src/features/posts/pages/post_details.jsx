import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getPostDetailsApiCall } from "../../../services/posts/post.api";

import { toast } from "react-toastify";

const Post_Details = () => {
  const { postId } = useParams();

  const [post, setPost] = useState(null);

  const [loading, setLoading] = useState(false);

  const getPost = async () => {
    try {
      setLoading(true);

      const response = await getPostDetailsApiCall({
        postId,
      });

      setPost(response.post);
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!post) {
    return <h1>Post Not Found</h1>;
  }

  return (
    <div className="post-details-container">
      <img src={post.post_image} alt="post" width={400} />

      <h2>{post.user?.username}</h2>

      <p>{post.caption}</p>
    </div>
  );
};

export default Post_Details;
