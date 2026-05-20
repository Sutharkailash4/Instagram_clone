const express = require("express");

const commentRoute = express.Router();

const authenticationMiddleware = require("../middleware/authMiddleware");

const commentControllers = require("../controllers/commentController");

commentRoute.post(
    "/createComment/:postId",
    authenticationMiddleware,
    commentControllers.createCommentController
);

commentRoute.get(
    "/getComments/:postId",
    authenticationMiddleware,
    commentControllers.getCommentsController
);

commentRoute.delete(
    "/deleteComment/:commentId",
    authenticationMiddleware,
    commentControllers.deleteCommentController
);

module.exports = commentRoute;