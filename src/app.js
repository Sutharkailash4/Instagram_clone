const express = require("express");
const app = express();
const userAuth = require("./routes/authRoutes");
const postRoute = require("./routes/postRoute");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use("/api/auth",userAuth);
app.use("/api/post",postRoute);
app.use(cookieParser());

module.exports = app;
console.log("kaialsh");