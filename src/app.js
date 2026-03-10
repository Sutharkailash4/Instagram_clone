const express = require("express");
const app = express();
const userAuth = require("./routes/authRoute");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use("/api/auth",userAuth);
app.use(cookieParser());
module.exports = app;