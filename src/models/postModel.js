const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    caption : {
        type : String,
        default : ""
    },
    imageURL : {
        type : String,
        required : [true, "Image is Required for Post"]
    }
})

const postModel = mongoose.model("Posts",postSchema);

module.exports = postModel; 