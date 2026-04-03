const mongoose = require("mongoose");
const model = require(".././models/likeModel");
const postModel = require(".././models/postModel");

const likeUserController = async (req, res) => {
    try {
        const user = req.user.id;
        const post = req.params.postId;
        if (!mongoose.Types.ObjectId.isValid(post)) {
            return res.status(409).json({
                message: "Please Enter Valid Id"
            })
        }
        const isPostExists = await postModel.findById({ post });
        if (!isPostExists) {
            return res.status(404).json({
                message: "Post Not Exists"
            })
        }
        const isAlreadyLiked = await model.findOne({
            user: user,
            post: post
        });
        if (isAlreadyLiked) {
            return res.status(409).json({
                message: "Post Already Liked"
            })
        }
        const like = await model.create({
            user: user,
            post: post
        });
        res.status(201).json({
            message: "Post Liked Successfully",
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
        const user = req.user.id;
        const post = req.params.postId;
        if (!mongoose.Types.ObjectId.isValid(post)) {
            return res.status(409).json({
                message: "Please Enter Valid Id"
            })
        }
        const isPostExists = await postModel.findById({ post });
        if (!isPostExists) {
            return res.status(404).json({
                message: "Post Not Exists"
            })
        }
        const isPostLiked = await model.findOne({
            user: user,
            post: postModel
        });
        if (!isPostLiked) {
            return res.status(409).json({
                message: "Post is Not Liked Yet"
            })
        }
        const unLike = await model.deleteOne({
            user : user,
            post : post
        });
        res.status(201).json({
            message : "Post Unliked Successfully",
            isPostExists
        })
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