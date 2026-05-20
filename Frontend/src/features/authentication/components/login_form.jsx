import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import useLogin from "../hooks/useLogin";

const Login_Form = () => {
  const navigate = useNavigate();

  const { loginHandler, loading } = useLogin();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [passShow, setPassShow] = useState("password");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      return toast.error("Email or Username is Required");
    }

    if (password.trim() === "") {
      return toast.error("Password is Required");
    }

    const response = await loginHandler({
      username: email,
      password,
    });

    if (response) {
      setEmail("");
      setPassword("");

      navigate("/");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <label htmlFor="email">Username or Email</label>

      <input
        type="text"
        name="login-email"
        placeholder="Username or Email"
        id="login-email"
        value={email}
        onChange={(text) => {
          setEmail(text.target.value);
        }}
      />

      <label htmlFor="password">Password</label>

      <input
        type={passShow}
        name="password"
        placeholder="Password"
        id="login-password"
        value={password}
        onChange={(text) => {
          setPassword(text.target.value);
        }}
      />

      <span
        className="pass-show"
        onClick={() => {
          if (passShow === "password") {
            setPassShow("text");
          } else {
            setPassShow("password");
          }
        }}
      >
        {password.length === 0 ? "" : passShow === "password" ? "Show" : "Hide"}
      </span>

      <button disabled={loading} type="submit" className="login-btn">
        {loading ? "Logging..." : "Login"}
      </button>

      <p className="register_login_toggle">
        Don't have an account ?
        <span
          className="auth-toggle"
          onClick={() => {
            navigate("/register");
          }}
        >
          Register
        </span>
      </p>
    </form>
  );
};

export default Login_Form;
