import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

export const registerApiCall = (username, email, password) => {
  const response = await api.post("/register", {
    username: username,
    email: email,
    password: password,
  });
  return response.data
};

export const loginApiCall = (username, password) => {
    const response = await api.post("/login",{
        username : username,
        password : password
    })
    return response.data
};

export const getMeApiCall = () => {
    const response = await api.get("getMe",{})
    return response.data
};
