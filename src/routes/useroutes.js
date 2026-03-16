const express = require("express");
const userAuthentication = express.Router();

const authenticationLogic = require("../controller/userController");

userAuthentication.post("/register",authenticationLogic.registerController);
userAuthentication.post("/login",authenticationLogic.loginController);

module.exports = userAuthentication;