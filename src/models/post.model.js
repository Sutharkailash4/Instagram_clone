const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    caption : {
        type : String,
        default : ""
    },
    imageURL : {
        type : String,
        required : [true, "Post is Required"]
    }
})

const postModel = mongoose.model("insta-post",postSchema);

module.exports = postModel;