import React, { useState } from "react";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import useRegister from "../hooks/useRegister";

const Register_Form = () => {
  const navigate = useNavigate();

  const { registerHandler, loading } = useRegister();

  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [bio, setBio] = useState("");

  const [imageFile, setImageFile] = useState("");

  const [passwordShow, setPasswordShow] = useState("password");

  const [bioCharCount, setBioCharCount] = useState(0);

  const submitHandler = async (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;

    if (username.trim() === "") {
      return toast.error("Username is Required");
    }

    if (email.trim() === "") {
      return toast.error("Email is Required");
    }

    if (password.trim() === "") {
      return toast.error("Password is Required");
    }

    if (password.length < 8) {
      return toast.error("Password must be 8 character");
    }

    if (!passwordRegex.test(password)) {
      return toast.error("Password must contain 1 number & 1 symbol");
    }

    if (password !== confirmPassword) {
      return toast.error("Password Do Not Match");
    }

    const response = await registerHandler({
      username,
      email,
      password,
      bio,
      profile_image: imageFile,
    });

    if (response) {
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setBio("");

      navigate("/login");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <label htmlFor="username">Username</label>

      <input
        type="text"
        name="username"
        id="register-username"
        placeholder="Username"
        value={username}
        onChange={(text) => {
          setUsername(text.target.value);
        }}
      />

      <label htmlFor="email">Email</label>

      <input
        type="email"
        name="email"
        id="register-email"
        placeholder="Email"
        value={email}
        onChange={(text) => {
          setEmail(text.target.value);
        }}
      />

      <label htmlFor="password">Password</label>

      <input
        type={passwordShow}
        name="password"
        id="register-password"
        placeholder="Password"
        value={password}
        onChange={(text) => {
          setPassword(text.target.value);
        }}
      />

      <p
        className="show-hide-password"
        onClick={() => {
          if (passwordShow === "password") {
            setPasswordShow("text");
          } else {
            setPasswordShow("password");
          }
        }}
      >
        {password.length === 0
          ? ""
          : passwordShow === "password"
            ? "Show"
            : "Hide"}
      </p>

      <label htmlFor="confirm-password">Confirm Password</label>

      <input
        type="password"
        name="confirm-password"
        id="register-confirm-password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(text) => {
          setConfirmPassword(text.target.value);
        }}
      />

      <label htmlFor="profile-image">Profile Picture</label>

      <input
        type="file"
        name="profile-image"
        id="register-profile-image"
        onChange={(e) => {
          setImageFile(e.target.files[0]);
        }}
      />

      <label htmlFor="bio">Bio</label>

      <textarea
        name="bio"
        id="register-bio"
        placeholder="Tell us About Yourself"
        value={bio}
        onChange={(e) => {
          setBio(e.target.value);
          setBioCharCount(e.target.value.length);
        }}
      ></textarea>

      <p className="bio-char-count">{bioCharCount} / 150</p>

      <button disabled={loading} type="submit" className="register-btn">
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default Register_Form;
