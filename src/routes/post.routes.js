const express = require("express");
const userPostRoute = express.Router();
const postControllers = require(".././controller/post.controller");

userPostRoute.post("/userpost",postControllers.postCreateController);

module.exports = userPostRoute;