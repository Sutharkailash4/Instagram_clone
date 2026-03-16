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
            const isEmailAlreadyExists = await model.findOne({email});
            if(!!isEmailAlreadyExists){
                return res.status(409).json({
                    message : "User With This Email is Already Exists"
                })
            }
            const isUserAlreadyExists = await model.findOne({name});
            if(!!isUserAlreadyExists){
                return res.status(409).json({
                    message : "This Username is Already Exists"
                })
            }
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
            res.cookie("access_token",a_token,
                {
                    httpOnly : true,
                    secure : true,
                    sameSite : "strict"
                }
            );
            res.cookie("refresh_token",r_token,
                {
                    httpOnly : true,
                    secure : true,
                    sameSite : "strict"
                }
            );
            res.status(200).json({
                message : "User Created Successfully",
                user : {
                    id : user._id,
                    username : user.name,
                    email : user.email
                }
            })
        }
    }catch(error){
        res.status(400).json({
            message : "Something Went Wrong"
        })
    }
})

userAuthentication.post("/login",async(req,res)=>{
    try{
        const data = req.body;
        const {email, name, password} = req.body;
        if(!data.password || data.password.trim()==="") return res.status(409).json({message : "Something Went Wrong"});
        else{
            const isUserAlreadyExistsByName = await model.findOne({email});
            if(!isUserAlreadyExistsByName){
                return res.status(409).json({
                    message : "User Not Exists"
                })
            }
            const isUserAlreadyExistsByEmail = await model.findOne({name});
            if(!isUserAlreadyExistsByEmail){
                return res.status(409).json({
                    message : "User Not Exists"
                })
            }
        }
        const hash_password = crypto.createHash("md5").update(password).digest("hex");
        if(hash_password !== isUserAlreadyExistsByEmail.password ){
            return res.status(409).json({
                message : "Wrong Password Try Again"
            })
        }
        const a_token = jwt.sign(
            {
                id : isUserAlreadyExistsByEmail._id,
                email : isUserAlreadyExistsByEmail.email
            },
            process.env.JWT_ACCESS_TOKEN,
            {
                expiresIn : "3h"
            }
        ) 
        const r_token = jwt.sign(
             {
                id : isUserAlreadyExistsByEmail._id,
                email : isUserAlreadyExistsByEmail.email
            },
            process.env.JWT_REFRESH_TOKEN,
            {
                expiresIn : "7d"
            }
        )
        res.cookie("access_token",a_token,
            {
                httpOnly : true,
                secure : true,
                sameSite : "strict"
            }
        )
        res.cookie("refresh_token",r_token,
            {
                httpOnly : true,
                secure : true,
                sameSite : "strict"
            }
        )
        res.status(201).json({
            message : "User Login Successfully",
            user : {
                id : isUserAlreadyExistsByEmail._id,
                username : isUserAlreadyExistsByEmail.name,
                email : isUserAlreadyExistsByEmail.email
            }
        })
    }catch(error){
        res.status(400).json({
            message : "Something Went Wrong"
        })
    }
})

module.exports = userAuthentication;