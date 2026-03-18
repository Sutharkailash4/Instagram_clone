const express = require("express");
const postCreateRoute = express.Router();
const postControllers = require(".././controller/post.controller");
const multer = require("multer");
const upload = multer({
    storage : multer.memoryStorage()
});

postCreateRoute.post("/userpost",upload.single("imageURL"),postControllers.postCreateController);

module.exports = postCreateRoute;