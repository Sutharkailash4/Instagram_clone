require("dotenv").config();
const app = require("./src/app");
const database = require("./src/config/database");
const Port = 3000;

database();

app.listen(Port,()=>{
    console.log("Server is running on port 3000");
})