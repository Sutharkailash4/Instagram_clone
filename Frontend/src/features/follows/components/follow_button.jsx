import React, { useState } from "react";

import { toast } from "react-toastify";

import {
  followUserApiCall,
  unFollowUserApiCall,
} from "../../../services/follows/follow.api";

const Follow_Button = ({ userId }) => {
  const [following, setFollowing] = useState(false);

  const [loading, setLoading] = useState(false);

  const followHandler = async () => {
    try {
      setLoading(true);

      await followUserApiCall({
        userId,
      });

      toast.success("User Followed");

      setFollowing(true);
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const unFollowHandler = async () => {
    try {
      setLoading(true);

      await unFollowUserApiCall({
        userId,
      });

      toast.success("User Unfollowed");

      setFollowing(false);
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      disabled={loading}
      onClick={() => {
        if (following) {
          unFollowHandler();
        } else {
          followHandler();
        }
      }}
    >
      {loading ? "Loading..." : following ? "Following" : "Follow"}
    </button>
  );
};

export default Follow_Button;
