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
    },
    status : {
        type : String,
        default : "pending",
        enum : {
            values : ["pending", "accepted", "rejected"],
            message : "Status Can Only be Pending, Accepted, or Rejected"
        }
    }
}, 
{ timestamps: true }
);

followSchema.index({ follower: 1, following: 1 }, { unique: true });

const followModel = mongoose.model("Follow", followSchema);

module.exports = followModel;