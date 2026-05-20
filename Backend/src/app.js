const express = require("express");
const cors = require("cors");
const app = express();

const cookieParser = require("cookie-parser");

const authenticationRoutes = require("./Routes/authRoutes");
const postRoutes = require("./Routes/postRoutes");
const followRoutes = require("./Routes/followRoutes");
const likeRoutes = require("./Routes/likeRoutes");
const commentRoutes = require("./Routes/commentRoutes");
const storyRoutes = require("./Routes/storyRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
)

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authenticationRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/user", followRoutes);
app.use("/api/user", likeRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/story", storyRoutes);
app.use(errorMiddleware);

module.exports = app;