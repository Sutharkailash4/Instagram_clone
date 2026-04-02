const mongoose = require("mongoose");
const model = require(".././models/followModel");
const userModel = require(".././models/authModel");

const followUserController = async (req, res) => {
    try {
        const follower_id = req.user.id;
        const following_id = req.params.userId;
        if (!mongoose.Types.ObjectId.isValid(following_id)) {
            return res.status(400).json({
                message: "Invalid User Id ! Please Enter Valid Id"
            })
        }
        if (follower_id === following_id) {
            return res.status(409).json({
                message: "You Cannot Follow Yourself"
            })
        }
        const isUserExists = await userModel.findOne({
            _id: following_id
        });
        if (!isUserExists) {
            return res.status(401).json({
                message: "User Does Not Exist With This Id"
            })
        }
        const isAlreadyFollow = await model.findOne({
            follower: follower_id,
            following: following_id
        });
        if (isAlreadyFollow) {
            return res.status(409).json({
                message: "You Already Following This User"
            })
        }
        const follow = await model.create({
            follower: follower_id,
            following: following_id
        });
        res.status(201).json({
            message: `You Are Now Following ${isUserExists.username}`,
            follow: follow
        })
    } catch (error) {
        res.status(400).json({
            message: "Something Went Wrong",
            error: error.message
        })
    }
}

const unFollowUserController = async (req, res) => {
    try {
        const unFollower = req.user.id;
        const unFollowing = req.params.userId;
        if (!mongoose.Types.ObjectId.isValid(unFollowing)) {
            return res.status(409).json({
                message: "Invalid Id ! Please Enter Valid Id"
            })
        }
        if (unFollower === unFollowing) {
            return res.status(409).json({
                message: "You Cannot Unfollow Yoursllf"
            })
        }
        const isUserExists = await userModel.findOne({
            _id: unFollowing
        });
        if (!isUserExists) {
            return res.status(409).json({
                message: "User Does Not Exists With This Id"
            })
        }
        const isAlreadyUnFollow = await model.findOne({
            follower: unFollower,
            following: unFollowing
        });
        if (!isAlreadyUnFollow) {
            return res.status(409).json({
                message: "User Already Unfollow"
            })
        }
        const unFollowUser = await model.deleteOne({
            follower: unFollower,
            following: unFollowing
        });
        const user = await userModel.findById(unFollowing)
        res.status(201).json({
            message : `You are Now Unfollow ${user.username}`,
            unFollowUser
        })
    } catch (error) {
        res.status(400).json({
            message: "Something Went Wrong",
            error: error.message
        })
    }
}

module.exports = {
    followUserController,
    unFollowUserController
}