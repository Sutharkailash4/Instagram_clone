require("dotenv").config();
const app = require("./src/app");
const port = 3000;
const database = require("./src/config/database");

database();

app.listen(port,()=>{
    console.log("Server is running on port 3000");
})