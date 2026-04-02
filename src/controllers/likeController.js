const mongoose = require("mongoose");
const model = require(".././models/likeModel");

const likeUserController = async (req, res) => {
    try {

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
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

module.exports = {
    likeUserController,
    unLikeUserController
}