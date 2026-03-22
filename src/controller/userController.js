const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const model = require(".././models/userModel");

const registerController = async (req,res) => {
    try{
        const data = req.body;
        if(!data.username || data.username.trim()==="") return res.status(409).json({message : "Username is Required"});
        else if(!data.email || data.email.trim()==="") return res.status(409).json({message : "Email is Required"});
        else if(!data.password || data.password.trim()==="") return res.status(409).json({message : "Password is Required"});
        else {
            const {username, email, password, bio, profile_image} = req.body;
            const isUserAlreadyExistsByUsername = await model.findOne({username});
            const isUserAlreadyExistsbyEmail = await model.findOne({email});
            if(!!isUserAlreadyExistsByUsername || isUserAlreadyExistsbyEmail) return res.status(409).json({message : "User Already Exists"});                 
            const hash_password = await bcrypt.hash(password, 10);
            const user = await model.create({
                username : username,
                email : email,
                password : hash_password,
                bio : bio,
                profile_image : profile_image
            });
            const access_token = jwt.sign(
                {id : user._id , email : email},
                process.env.JWT_ACCESS_TOKEN,
                {expiresIn : "3h"}
            )
            const refresh_token = jwt.sign(
                {id : user._id , email : email},
                process.env.JWT_REFRESH_TOKEN,
                {expiresIn : "7d"}
            )
            res.cookie("access_token",access_token,
                {httpOnly : true, secure : true, sameSite : "strict"}
            );
            res.cookie("refresh_token",refresh_token,
                {httpOnly : true, secure : true, sameSite : "strict"}
            )
            res.status(201).json({
                message : "User Created Successfully",
                id : user._id,
                username : user.username,
                email : user.email
            });
        }
    }catch(error){
        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

const loginController = (req,res) => {
    
}

module.exports = {
    registerController,
    loginController
}