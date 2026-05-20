const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({

    comment : {
        type : String,
        required : [true, "Comment is Required"]
    },

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Users",
        required : true
    },

    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Posts",
        required : true
    }

}, { timestamps : true });

const commentModel = mongoose.model("Comments", commentSchema);

module.exports = commentModel;