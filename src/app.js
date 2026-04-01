const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const authenticationRoutes = require("./Routes/authRoutes");

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authenticationRoutes);

module.exports = app;