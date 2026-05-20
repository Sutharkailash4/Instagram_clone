import { useState } from "react";

import { toast } from "react-toastify";

import { loginApiCall } from "../../../services/authentication/auth.api";

const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const loginHandler = async ({ username, password }) => {
    try {
      setLoading(true);

      const response = await loginApiCall({
        username,
        password,
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
    loginHandler,
    loading,
  };
};

export default useLogin;
