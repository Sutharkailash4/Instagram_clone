import React, { createContext, useEffect, useState } from "react";

import { getMeApiCall } from "../../../services/authentication/auth.api";

export const Auth_Context = createContext();

const Auth_Context_Provider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);

  const getMe = async () => {
    try {
      setLoading(true);

      const response = await getMeApiCall();

      setUser(response.user);
    } catch (error) {
      console.log(error);

      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMe();
  }, []);

  return (
    <Auth_Context.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        getMe,
      }}
    >
      {children}
    </Auth_Context.Provider>
  );
};

export default Auth_Context_Provider;
