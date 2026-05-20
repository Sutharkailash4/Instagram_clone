const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({

    story_image : {
        type : String,
        required : [true, "Story Image is Required"]
    },

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Users",
        required : [true, "User Id is Required"]
    }

}, { timestamps : true });

const storyModel = mongoose.model("Stories", storySchema);

module.exports = storyModel;