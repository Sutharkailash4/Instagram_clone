import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passShow, setPassShow] = useState("password");

  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      toast.error("Email or Username is Required");
    } else if (password.trim() === "") {
      toast.error("Password is required");
    } else {
      setLoading(true);
      axios
        .post(
          "http://localhost:3000/api/auth/login",
          {
            username: email,
            password: password,
          },
          {
            withCredentials: true,
          },
        )
        .then((res) => {
          toast.success("User Login Successfully");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          toast.error(error.response?.data?.message);
        })
        .finally(() => {
          setLoading(false);    
        });
    }
  };
  return (
    <div className="login-container">
      <h2 className="heading">Login</h2>
      <p className="para-heading">Login To get Account</p>
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
          onChange={(text) => [setEmail(text.target.value)]}
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
          {passShow.length === 0
            ? ""
            : passShow === "password"
              ? "Show"
              : "Hide"}
        </span>
        <button disabled={loading} type="submit" className="login-btn">
          {loading ? "Registering" : "Register"}
          {loading && <div className="spinner"></div>}
        </button>
        <p className="register_login_toggle">
          Already have an account ?{" "}
          <span className="auth-toggle" onClick={() => [navigate("/register")]}>
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login; 