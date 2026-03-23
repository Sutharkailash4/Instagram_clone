const express = require("express");
const postRoute = express.Router();
const postControllers = require(".././controller/postController");
const multer = require("multer");
const upload = multer({
    storage : multer.memoryStorage()
});

postRoute.post("/createPost",upload.single("post_image"),postControllers.createPostController);

module.exports = postRoute;