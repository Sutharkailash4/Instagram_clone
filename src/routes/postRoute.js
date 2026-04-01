const express = require("express");
const postRoute = express.Router();
const postControllers = require(".././controller/postController");
const multer = require("multer");
const identifyUserMiddleware = require("../middleware/authMiddleware");
const upload = multer({
    storage : multer.memoryStorage()
});

postRoute.post("/createPost",upload.single("imageURL"),identifyUserMiddleware,postControllers.createPostController);
postRoute.get("/getPost",identifyUserMiddleware,postControllers.getPostController);
postRoute.get("/getPostDetails/:postId",identifyUserMiddleware,postControllers.getPostDetailsController);

module.exports = postRoute;