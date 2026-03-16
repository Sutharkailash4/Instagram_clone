const express = require("express");
const userAuthentication = express.Router();

userAuthentication.post("/register");
userAuthentication.post("/login");

module.exports = userAuthentication;