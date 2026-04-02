const mongoose = require("mognoose");

const likeSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Users",
        required : [true, "User is Required"]
    },
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Posts",
        required : [true, "Post is Required"]
    }
},{timeStamp : true});

const likeModel = mongoose.model("likes", likeSchema);

module.exports = likeModel;