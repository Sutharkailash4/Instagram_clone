const express = require("express");
const authRoute = express.Router();
const controllers = require(".././controllers/authController");
const authMiddleware = require("../middleware/authMiddleware")

authRoute.post("/register", controllers.registerController);
authRoute.post("/login", controllers.loginController);
authRoute.get("/get-me", authMiddleware, controllers.getMeController);

module.exports = authRoute;