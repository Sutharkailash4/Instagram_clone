const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        unique : [true , "Enter UserName is Alreadu Exists"],
        required : [true , "userName is Required"]
    },
    email : {
        type : String,
        required : [true , "Email is Required"],
        unique : [true, "Please Enter Unique Email Address"]
    },
    password : {
        type : String,
        required : [true , "Password is Required"]
    },
    bio : {
        type : String,
        default : ""
    },
    profile_pic : {
        type : String,
        default : "https://plus.unsplash.com/premium_photo-1738614647383-0435fcb26a55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym90JTIwcHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
    }
})

const userModel = mongoose.model = ("Insta_user",userSchema);

module.exports = userModel;