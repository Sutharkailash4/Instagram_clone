const express = require("express");
const app = express();
const userAuth = require("./src/routes/userroutes");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use("api/auth",userAuth);
module.exports = app;