const express = require("express");
const followRoute = express.Router();
const followControllers = require(".././controllers/followController");
const authenticationMiddleware = require(".././middleware/authMiddleware");

followRoute.post("/follow/:userId", authenticationMiddleware, followControllers.followUserController);
followRoute.post("unFollow/:userId", authenticationMiddleware, followControllers.unFollowUserController);

module.exports = followRoute;