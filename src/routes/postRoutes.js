const express = require("express");
const userPost = express.Router();
const postController = require("../controller/postController");

userPost.post("/userpost",postController.createPostController);

module.exports = userPost;