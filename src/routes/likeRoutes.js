const express = require("express");
const likeRoute = express.Router();
const authenticationMiddleware = require(".././middleware/authMiddleware");
const likeControllers = require(".././controllers/likeController");

likeRoute.post("/like/:userId")

module.exports = likeRoute;