const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const userCreateRoute = require("./routes/user.routes");
const userPostRoute = require("./routes/post.routes");

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",userCreateRoute);
app.use("/api/post",userPostRoute);

module.exports = app;