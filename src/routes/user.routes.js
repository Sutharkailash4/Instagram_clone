const express = require("express");
const userAuthenticationRoute = express.Router();
const userAuthControllers = require(".././controller/userauth.controller");

userAuthenticationRoute.post("/register",userAuthControllers.registerController);
userAuthenticationRoute.post("/login",userAuthControllers.loginController);

module.exports = userAuthenticationRoute;