const express = require("express");
const app = express();
const userAuth = require("./routes/authRoutes");
const postRoute = require("./routes/postRoute");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",userAuth);
app.use("/api/post",postRoute);

module.exports = app;