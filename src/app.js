const express = require("express");
const app = express();
const userModel = require("./models/userModel");
const userAuth = require("./routes/authRoute");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use("/api/auth",userAuth);
app.use(cookieParser());

app.get("/users",async(req,res)=>{
    try{
        const allUser = await userModel.find();
        if(!find){
            return res.status(409).json({
                message : "User Not Found"
            })
        }
    }catch(error){
        res.status(400).json({
            message : "Something Went Wrong"
        })
    }
})

app.delete("/remove/:id",async(req,res)=>{
    try{    
        const id = req.params.id;
        await userModel.findByIdAndDelete(id);
        res.status(200).json({
            message : "User Deleted Successfully"
        })
    }catch(error){
        res.status(400).json({
            message : "Something Went Wrong"
        })
    }
})

module.exports = app;