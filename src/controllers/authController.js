const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const model = require(".././models/authModel");

// Register 
const registerController = async (req, res) => {
    try {
        const data = req.body;
        if (!data.username || data.username.trim() === "") {
            return res.status(400).json({
                message: "Username is Required"
            })
        } else if (!data.email || data.email.trim() === "") {
            return res.status(400).json({
                message: "Email is Required"
            })
        } else if (!data.password || data.password.trim() === "") {
            return res.status(400).json({
                message: "Password is Required"
            })
        } else {
            const { username, email, password, bio, profile_image } = req.body;
            const isEmailAlreadyExists = await model.findOne({
                $or: [
                    { username },
                    { email }
                ]
            })
            if (!!isEmailAlreadyExists) {
                return res.status(409).json({
                    message: "Username or Email Alreday Exists ! Please Try Again"
                })
            }
            const hash_password = await bcrypt.hash(password, 10);
            const user = await model.create({
                username: username,
                email: email,
                password: hash_password,
                bio: bio,
                profile_image: profile_image
            });
            const access_token = jwt.sign({
                id: user._id,
                email: user.email
            },
                process.env.JWT_ACCESS_TOKEN,
                { expiresIn: "1h" });
            const refresh_token = jwt.sign({
                id: user._id,
                email: user.email
            },
                process.env.JWT_REFRESH_TOKEN,
                { expiresIn: "7d" });
            res.cookie("access_token", access_token, {
                httpOnly: true,
                secure: true,
                sameSite: "strict"
            });
            res.cookie("refresh_token", refresh_token, {
                httpOnly: true,
                secure: true,
                sameSite: "strict"
            });
        }
    } catch (error) {
        res.status(400).json({
            message: "Something Went Wrong",
            error: error.message
        })
    }
}

//login
const loginController = async (req, res) => {
    try {
        const data = req.body;
        if (!data.password || data.password.trim() === "") {
            return res.status(400).json({
                message: "Password is Required For Login"
            })
        } else if (!data.username || data.username.trim() === "" && !data.email || data.email.trim() === "") {
            return res.status(400).json({
                message: "Username or Email is Required For Login"
            })
        } else {

        }
    } catch (error) {
        res.status(400).json({
            message: "Something Went Wrong"
        })
    }
}

module.exports = {
    registerController,
    loginController
}