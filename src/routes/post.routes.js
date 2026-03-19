const express = require("express");
const userPostRoute = express();
const userPostController = require(".././controller/post.controller");
const multer = require("multer");
const upload = multer({
    storage : multer.memoryStorage()
});

userPostRoute.post("/userpost",upload.single("imageURL"),userPostController.createUserPost);

module.exports = userPostRoute;