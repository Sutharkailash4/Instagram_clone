const express = require("express");
const userAuthentication = express.Router();
const userModel = require(".././models/userModel");
const jwt = require("jsonwebtoken");

userAuthentication.post("/register",async(req,res)=>{
    try{
        const data = req.body;
        if(data.name)
    }catch(error){
        res.status(400).json({
            message : "Soemthing Went Wrong"
        })
    }
})

module.exports = userAuthentication;