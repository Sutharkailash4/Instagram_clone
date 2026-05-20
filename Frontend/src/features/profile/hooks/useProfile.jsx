import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { getProfileApiCall } from "../../../services/profile/profile.api";

const useProfile = ({ userId }) => {
  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(false);

  const getProfile = async () => {
    try {
      setLoading(true);

      const response = await getProfileApiCall({
        userId,
      });

      setProfile(response.user);
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      getProfile();
    }
  }, [userId]);

  return {
    profile,
    setProfile,
    loading,
    getProfile,
  };
};

export default useProfile;
