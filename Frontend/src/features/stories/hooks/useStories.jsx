import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { getStoriesApiCall } from "../../../services/story/story.api";

const useStories = () => {
  const [stories, setStories] = useState([]);

  const [loading, setLoading] = useState(false);

  const getStories = async () => {
    try {
      setLoading(true);

      const response = await getStoriesApiCall();

      setStories(response.stories);
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStories();
  }, []);

  return {
    stories,
    setStories,
    loading,
    getStories,
  };
};

export default useStories;
