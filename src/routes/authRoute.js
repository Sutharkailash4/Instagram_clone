const express = require("express");
const userAuthentication = express.Router();
const userModel = require(".././models/userModel");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

userAuthentication.post("/register",async(req,res)=>{
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
            res.cookie("a_token",access_token,
                {
                    httpOnly : true,
                    secure : false,
                    sameSite : "strict"
                }
            );
            res.cookie("r_token",refresh_token,{
                httpOnly : true,
                secure : false,
                sameSite : "strict"
            });
            res.status(201).json({
                message : "User Register Successfully",
                user : {
                    id : user._id,
                    username : user.name,
                    email : user.email,
                }
            })
        }   
    }catch(error){
        res.status(400).json({
            message : "Something Went Wrong"
        })
    }
})

userAuthentication.post*("/login",async(req,res)=>{
    try{
        const data = req.body;
        if(!data.name || data.name.trim()==="") return res.status(409).json({message : "Name is Required"});
        else if(!data.password || data.password.trim()==="") return res.status(409).json({message : "Password is Required"});
        else {
            const {name, password} = req.body;
            const isUserExists = await userModel.findOne({name});
            if(!isUserExists){
                return res.status(409).json({
                    message : "User Not Found"
                })
            }
            const hash_password = crypto.createHash("md5").update(password).digest("hex");
            if(!isUserExists.password === hash_password){
                return res.status(409).json({
                    message : "Password is Incorrect"
                })
            }
            const access_token = jwt.sign(
                {
                    id : isUserExists._id,
                    email : isUserExists.email
                },
                process.env.JWT_ACCESS_TOKEN,
                {
                    expiresIn : "2h"
                }
            )
            res.cookie("a_token",access_token);
            res.status(201).json({
                message : "User Login Successfully",
                user : {
                    id : isUserExists._id,
                    username : isUserExists.name,
                    email : isUserExists.email
                }
            })
        }
    }catch(error){
        res.status(400).json({
            message : "Something Went Wrong"
        })
    }
})

module.exports = userAuthentication;