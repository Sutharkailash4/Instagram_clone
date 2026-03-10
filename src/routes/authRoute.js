const express = require("express");
const userAuthentication = express.Router();
const userModel = require(".././models/userModel");
const jwt = require("jsonwebtoken");
const crypto = required("crypto");

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
                password : hash_password
            })
            const token = jwt.sign(
            {
                    id : user._id,
                    email : user.email
                
            },
            
        )
        }
    }catch(error){
        res.status(400).json({
            message : "Something Went Wrong"
        })
    }
})

module.exports = userAuthentication;