const model = require(".././models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function registerController(req,res){
    try{
        const data = req.body;
        if(!data.name || data.name.trim()==="") return res.status(409).json({message : "Name is Required"});
        else if(!data.email || data.email.trim()==="") return res.status(409).json({message : "Email is Required"});
        else if(!data.password || data.password.trim()==="") return res.status(409).json({message : "Password is Required"});
        else {
            const {name, email, password, bio, profile_pic} = req.body;
            const isUserAlreadyExists = await model.findOne({
                $or : [
                    {email},
                    {name}
                ]
            })
            if(!!isUserAlreadyExists){
                return res.status(409).json({
                    message : "User Already Exists"
                })
            }
            const hash_password = await bcrypt.hash(password , 20);
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
                process.env.JWT_ACCESS_TOEKN,
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
            res.cookie("access_token",a_token,{
                httpOnly : true,
                secure : true,
                sameSite : "strict"
            })
            res.cookie("refresh_token",r_token,{
                httpOnly : true,
                secure : true,
                sameSite : "strict"
            })
            res.status(201).json({
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
}

async function loginController(req,res){
    try{
        const data = req.body;
        if(!data.password || data.password.trim()==="") return res.status(409).json({message : "Password is Required"});
        else if((!data.name && !data.email) || (data.name.trim()===""  && data.email.trim()==="")) return res.status(409).json({message : "Email and Name is Required"});
        else {
            const {name, email, password} = req.body;
            const isUserExists = await model.findOne({
                $or : [
                    {email},
                    {name}
                ]
            })
            if(!isUserExists){
                return res.status(409).json({
                    message : "User Does Not Exists"
                })
            }   
            const isPasswordCorrect = await bcrypt.compare(password, isUserExists.password);
            if(!isPasswordCorrect){
                return res.status(401).json({
                    message : "Password is Invalid Please Try Again"
                })
            } 
            const a_token = jwt.sign(
                {
                    id : isUserExists._id,
                    email : isUserExists.email
                },
                process.env.JWT_ACCESS_TOEKN,
                {
                    expiresIn : "3h"
                }
            )
            const r_token = jwt.sign(
                {
                    id : isUserExists._id,
                    email : isUserExists.email
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
}

module.exports = {
    registerController,
    loginController
}