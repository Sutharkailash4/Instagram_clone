const express = require("express");
const cors = require("cors");
const app = express();

const cookieParser = require("cookie-parser");
const authenticationRoutes = require("./Routes/authRoutes");
const postRoutes = require("./Routes/postRoutes");
const followRoutes = require("./Routes/followRoutes");
const likeRoutes = require("./Routes/likeRoutes");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authenticationRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/user", followRoutes);
app.use("/api/user", likeRoutes);

module.exports = app;