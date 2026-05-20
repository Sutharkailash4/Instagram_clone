import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { getCommentsApiCall } from "../../../services/comments/comment.api";

const useComments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const [loading, setLoading] = useState(false);

  const getComments = async () => {
    try {
      setLoading(true);

      const response = await getCommentsApiCall({
        postId,
      });

      setComments(response.comments);
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (postId) {
      getComments();
    }
  }, [postId]);

  return {
    comments,
    setComments,
    loading,
    getComments,
  };
};

export default useComments;
