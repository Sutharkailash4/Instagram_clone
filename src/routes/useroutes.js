const express = require("express");
const userAuthentication = express.Router();
const authController = require(".././controller/userController");

userAuthentication.post("/register",authController.registerController);
userAuthentication.post("/login",authController.loginController);

module.exports = userAuthentication;