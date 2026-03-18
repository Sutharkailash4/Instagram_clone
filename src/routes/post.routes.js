const express = require("express");
const userPostRoute = express.Router();
const postControllers = require(".././controller/post.controller");
const multer = require("multer");
const upload = multer({
    storage : multer.memoryStorage()
});

userPostRoute.post("/userpost",upload.single("imageURL"),postControllers.postCreateController);

module.exports = userPostRoute;