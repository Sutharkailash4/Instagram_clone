const express = require("express");
const model = require(".././models/user.model");
const userAuthentication = express.Router();
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

userAuthentication.post("/register",async(req,res)=>{
    try{
        const data = req.body;
        if(!data.name || data.name.trim()==="") return res.status(409).json({message : "Name is Required"});
        else if(!data.email || data.email.trim()==="") return res.status(409).json({message : "Email is Required"});
        else if(!data.password || data.password.trim()==="") return res.status(409).json({message : "Password is Required"});
        else {
            const {name, email, password, bio, profile_pic} = req.body;
            const hash_password = crypto.createHash("md5").update(password).digest("hex"); 
            const user = await model.create({
                name : name,
                email : email,
                password : hash_password,
                bio : bio,
                profile_pic : profile_pic
            })
            const a_token = jwt.sign(
                {
                    id : user._id,
                    email : user.email
                },
                process.env.JWT_ACCESS_TOKEN,
                {
                    expiresIn : "3h"
                }
            )
            const r_token = jwt.sign(
                {
                    id : user._id,
                    email : user.email
                },
                process.env.JWT_REFRESH_TOKEN,
                {
                    expiresIn : "7d"
                }
            )
            res.cookie("Cookie",a_token);
            res.cookie("Cookie",r_token);
            res.status(200).json({
                message : "User Created Successfully"
            })
        }
    }catch(error){
        res.status(400).json({
            message : "Something Went Wrong"
        })
    }
})

module.exports = userAuth;