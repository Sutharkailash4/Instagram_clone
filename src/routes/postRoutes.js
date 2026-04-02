const express = require("express");
const postRoute = express.Router();
const postControllers = require(".././controllers/postController");
const authenticationMiddleware = require(".././middleware/authMiddleware");
const multer = require("multer");
const upload = multer({
    storage: multer.memoryStorage()
});

postRoute.post("/createPost", authenticationMiddleware, upload.single("post_image"), postControllers.createPostController);
postRoute.get("/getPost", authenticationMiddleware, postControllers.getPostController);
postRoute.get("/getPostDetails/:postId", authenticationMiddleware, postControllers.getPostDetailsController);

module.exports = postRoute;