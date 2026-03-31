const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    caption : {
        type : String,
        default : ""
    },
    post_image : {
        type : String,
        required : [true, "Post image is Required To Create Post"]
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Instagram-allUsers",
        required : [true ,"User Id is Required To Create Post"]
    }

})

const postModel = mongoose.model("Instagram_Posts",postSchema);

module.exports = postModel;