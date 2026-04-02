const mongoose = require("mongoose");
const model = require(".././models/likeModel");

const likeUserController = async (req, res) => {
    try {
        const user = req.user.id;
        const post = req.params.userId;
        if (!mongoose.Types.ObjectId.isValid(post)) {
            return res.status(409).json({
                message: "Invalid Id ! Please Enter Valid Id"
            })
        }
        if (user === post){
            return res.status(409).json({
                message : "You Cannot Like Yourself"
            })
        }
        const isAlreadyLike = await model.findOne({
            user : user,
            post : post
        });
        if(isAlreadyLike){
            return res.status(409).json({
                message : "Post Already Liked"
            })
        }
        const like = await model.create({
            user : user,
            post : post
        });
        res.status(201).json({
            message : "Post Like Successfully",
            like            
        })
    } catch (error) {
        res.status(400).json({
            message: "Something Went Wrong",
            error: error.message
        })
    }
}

const unLikeUserController = async (req, res) => {
    try {

    } catch (error) {
        res.status(400).json({
            message: "Something Went Wrong",
            error: error.message
        })
    }
}

module.exports = {
    likeUserController,
    unLikeUserController
}