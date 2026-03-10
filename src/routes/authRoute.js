const express = require("express");
const userAuthentication = express.Router();
const userModel = require(".././models/userModel");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

userAuthentication.post("./register",async(req,res)=>{
    try{
        const data = req.body;
        if(!data.name || data.name.trim()==="") return res.status(409).json({message : "Username is Required"});
        else if(!data.email || data.email.trim()==="") return res.status(409).json({message : "Email is Required"});
        else if(!data.password || data.password.trim()==="") return res.status(409).json({message : "Password is Required"});
        else {
            const {name, email, password, bio, profile_pic} = req.body;
            // const isUserAlreadyExists = await userModel.findOne({name});
            // if(isUserAlreadyExists){
            //     return res.status(409).json({
            //         message : 'Username is Already Exists'
            //     })
            // }
            // const isEmailAlreadyExists = await userModel.findOne({email});
            // if(isEmailAlreadyExists){
            //     return res.status(409).json({
            //         message : "User With This Email is Already Exists"
            //     })
            // }
            const isUserAlreadyExists = await userModel.findOne({
                $or : [
                    {name},
                    {email}
                ]
            })
            if(isUserAlreadyExists){
                return res.status(409).json({
                    message : "User Already Exists"
                })
            }
            const hash_password = crypto.createHash("md5").update(password).digest("hex");
            const user = await userModel.create({
                name : name,
                email : email,
                password : hash_password,
                bio : bio,
                profile_pic : profile_pic
            })
            const access_token = jwt.sign(
            {
                    id : user._id,
                    email : user.email
                
            },
            process.env.JWT_ACCESS_TOKEN,
            {
                expiresIn : "1h"
            }
            )
            const refresh_token = jwt.sign(
                {
                    id : user._id,
                    email : user.email
                },
                process.env.JWT_REFRESH_TOKEN,
                {
                    expiresIn : "7d"
                }
            )
            res.cookie("a_token",access_token);
            res.cookie("r_token",refresh_token);
            res.status(201).json({
                message : "User Register Successfully"
            })
        }   
    }catch(error){
        res.status(400).json({
            message : "Something Went Wrong"
        })
    }
})

module.exports = userAuthentication;