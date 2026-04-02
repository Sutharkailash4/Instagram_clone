const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const authenticationRoutes = require("./Routes/authRoutes");
const postRoutes = require("./Routes/postRoutes");

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authenticationRoutes);
app.use("/api/posts", postRoutes);

module.exports = app;