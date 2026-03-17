const express = require("express");
const userPost = express.Router();
const postController = require("../controller/postController");
const multer = require("multer");

userPost.post("/userpost",postController.createPostController);

module.exports = userPost;