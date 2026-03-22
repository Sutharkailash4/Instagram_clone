const express = require("express");
const app = express();
const userAuth = require("./src/routes/authRoutes");

app.use(express.json());
app.use("/api/auth",userAuth);

module.exports = app;