const express = require("express");
const userAuthentication = express.Router();
const authControllers = require(".././controller/userController");

userAuthentication.post("/register",authControllers.registerController);
userAuthentication.post("/login",authControllers.loginController);

module.exports = userAuthentication;  