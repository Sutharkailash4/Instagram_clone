const express = require("express");
const likeRoute = express.Router();
const authenticationMiddleware = require(".././middleware/authMiddleware");
const likeControllers = require(".././controllers/likeController");

likeRoute.post("/like/:postId", authenticationMiddleware, likeControllers.likeUserController);
likeRoute.post("unLike/:postId", authenticationMiddleware, likeControllers.unLikeUserController);

module.exports = likeRoute;