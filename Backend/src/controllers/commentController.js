const mongoose = require("mongoose");
const commentModel = require("../models/commentModel");
const postModel = require("../models/postModel");

const createCommentController = async (req, res) => {
    try {

        const postId = req.params.postId;

        const { comment } = req.body;

        if (!mongoose.Types.ObjectId.isValid(postId)) {
            return res.status(400).json({
                message : "Invalid Post Id"
            })
        }

        if (!comment || comment.trim() === "") {
            return res.status(400).json({
                message : "Comment is Required"
            })
        }

        const isPostExists = await postModel.findById(postId);

        if (!isPostExists) {
            return res.status(404).json({
                message : "Post Not Found"
            })
        }

        const newComment = await commentModel.create({
            comment : comment,
            user : req.user.id,
            post : postId
        });

        res.status(201).json({
            message : "Comment Added Successfully",
            comment : newComment
        })

    } catch (error) {

        console.error(error);

        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

const getCommentsController = async (req, res) => {
    try {

        const postId = req.params.postId;

        if (!mongoose.Types.ObjectId.isValid(postId)) {
            return res.status(400).json({
                message : "Invalid Post Id"
            })
        }

        const comments = await commentModel.find({
            post : postId
        })
        .populate("user", "-password")
        .sort({ createdAt : -1 });

        res.status(200).json({
            message : "Comments Fetched Successfully",
            comments
        })

    } catch (error) {

        console.error(error);

        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

const deleteCommentController = async (req, res) => {
    try {

        const commentId = req.params.commentId;

        if (!mongoose.Types.ObjectId.isValid(commentId)) {
            return res.status(400).json({
                message : "Invalid Comment Id"
            })
        }

        const comment = await commentModel.findById(commentId);

        if (!comment) {
            return res.status(404).json({
                message : "Comment Not Found"
            })
        }

        const isUserAuthorized = req.user.id === comment.user.toString();

        if (!isUserAuthorized) {
            return res.status(401).json({
                message : "Unauthorized User"
            })
        }

        await commentModel.deleteOne({
            _id : commentId
        });

        res.status(200).json({
            message : "Comment Deleted Successfully"
        })

    } catch (error) {

        console.error(error);

        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

module.exports = {
    createCommentController,
    getCommentsController,
    deleteCommentController
}