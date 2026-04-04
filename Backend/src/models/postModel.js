const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    caption : {
        type : String,
        default : ""
    },
    post_image : {
        type : String,
        required : [true, "Post Image is Required For Creating Post"]
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : [true, "User Id is Required For Creating Post"]
    }
},{timestamps : true});

const postModel = mongoose.model("Posts", postSchema);

module.exports = postModel;