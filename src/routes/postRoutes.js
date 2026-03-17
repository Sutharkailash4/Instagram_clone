const express = require("express");
const userPost = express.Router();
const model = require("../models/postModel");

userPost.post("/post",async (req,res)=>{
    try{
        
    }catch(error){
         res.status(400).json({
            message : "Something Went Wrong"
        })
    }
});

module.exports = userPost;