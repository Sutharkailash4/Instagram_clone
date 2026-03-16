const model = require(".././models/user.model");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const registerController = async (req,res) => {
    try{
       const data = req.body;
       if(!data.name || data.name.trim()==="") return res.status(409).json({message : "Name is Required"});
       else if(!data.email || data.email.trim()==="") return res.status(409).json({message : "Email is Required"});
       else if(!data.password || data.password.trim()==="") return res.status(409).json({message : "Password is Required"});
       else {
        const {name, email, password, bio, profile_pic} = req.body;
        const isUserAlreadyExists = await model.findOne({
            $or : [
                {email : email},
                {name : name}
            ]
        })
        if(!!isUserAlreadyExists){
            return res.status(409).json({
                message : "User Alreday Exists"
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
        )
            res.cookie("refresh_token",r_token,
            {
                httpOnly : true,
                secure : true,
                sameSite : "strict"
            }
        )
       }
       res.status(200).json({
        message : "User Create Successfuly",
        user : {
            username : user.name,
            id : user._id,
            email : user.email
        }
       })
    }catch(error){
        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

const loginController = async (req,res) => {
    try{
       const data = req.body;
       if(!data.password || data.password.trim()==="")  return res.status(409).json({message : "Password is Required"});
       else {
        const{email, name, password} = req.body;
        const isUserExists = await model.findOne({
            $or : [
                {email : email},
                {name : name}
            ]
        })
        if(!isUserExists){
            return res.status(409).json({
                message : "User Does Not Exists"
            })
        }
       }
    }catch(error){
        res.status(400).json({
            message : "Something Went Wrong"
        })
    }
}