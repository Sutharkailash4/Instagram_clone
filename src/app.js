const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const userAuth = require("./src/routes/useroutes");
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",userAuth);
module.exports = app;