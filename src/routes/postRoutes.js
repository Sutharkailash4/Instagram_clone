const express = require("express");
const postRoute = express.Router();
const postControllers = require(".././controllers/postController");
const multer = require("multer");
const upload = multer({
    storage : multer.memoryStorage()
});

postRoute.post("/createPost",upload.single("post_image"), postControllers.createPostController);
postRoute.get("/getPost", postControllers.getPostController);
postRoute.get("/getPostDetails", postControllers.getPostDetailsController);

module.exports = postRoute;