import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Register from "../features/authentication/pages/register";
import Login from "../features/authentication/pages/login";
import Stories from "../pages/stories";
import Create_Post_Page from "../pages/create_post";
import Profile from "../features/profile/pages/profile";
import Post_Details from "../features/posts/pages/post_details";
import Page_Not_Found from "../components/page_not_found";

const All_Routes = () => {
  return (
    <div className="routes-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/create-post" element={<Create_Post_Page />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/post/:postId" element={<Post_Details />} />
        <Route path="*" element={<Page_Not_Found />} />
      </Routes>
    </div>
  );
};

export default All_Routes;
