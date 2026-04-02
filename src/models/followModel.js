const mongoose = require("mongoose");

const followSchema = new mongoose.Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: [true, "Follower is Required"]
    },
    following: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: [true, "Following is Required"]
    }
}, { timestamps: true });

followSchema.index({ follower: 1, following: 1 }, { unique: true });

const followModel = mongoose.model("Follow", followSchema);

module.exports = followModel;