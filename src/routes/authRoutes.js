const express = require("express");
const authRoute = express.Router();
const controllers = require(".././controllers/authController");

authRoute.post("/register", controllers.registerController);
authRoute.post("/login", controllers.loginController);

module.exports = authRoute;