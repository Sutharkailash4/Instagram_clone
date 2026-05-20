import { useState } from "react";

import { toast } from "react-toastify";

import { registerApiCall } from "../../../services/authentication/auth.api";

const useRegister = () => {
  const [loading, setLoading] = useState(false);

  const registerHandler = async ({
    username,
    email,
    password,
    bio,
    profile_image,
  }) => {
    try {
      setLoading(true);

      const response = await registerApiCall({
        username,
        email,
        password,
        bio,
        profile_image,
      });

      toast.success(response.message);

      return response;
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    registerHandler,
    loading,
  };
};

export default useRegister;
