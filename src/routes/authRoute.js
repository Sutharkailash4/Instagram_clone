const express = require("express");
const userAuthentication = express.Router();
const userModel = require(".././models/userModel");
const jwt = require("jsonwebtoken");

userAuthentication.post("./register",async(req,res)=>{
    try{
        const data = req.body;
        if(!data.name || data.name.trim()==="") return res.status(409).json({message : "Username is Required"});
        else if(!data.email || data.email.trim()==="") return res.status(409).json({message : "Email is Required"});
        else if(!data.password || data.password.trim()==="") return res.status(409).json({message : "Password is Required"});
        
    }catch(error){
        res.status(400).json({
            message : "Something Went Wrong"
        })
    }
})

module.exports = userAuthentication;