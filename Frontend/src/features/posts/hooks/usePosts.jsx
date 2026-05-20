import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { getPostsApiCall } from "../../../services/posts/post.api";

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    try {
      setLoading(true);

      const response = await getPostsApiCall();

      setPosts(response.posts);
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return {
    posts,
    setPosts,
    loading,
    getPosts,
  };
};

export default usePosts;
