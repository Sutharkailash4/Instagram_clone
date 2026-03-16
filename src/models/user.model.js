const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name is Required"]
    },
    email : {
        type : String,
        required : [true, "Email is Required"],
        unique : [true, "Email Already Exists"]
    },
    password : {
        type : String,
        required : [true, "Password is Required"]
    },
    bio : {
        type : String,
        defualt : ""
    },
    profile_pic : {
        type : String,
        default : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQArgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADAQAQACAQIEBAQEBwAAAAAAAAABAgMEEQUhMWESIkFREzJScRSSocEjM0JDcoGC/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APpYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAERvPl5yANsabNPTFk/LLG+HJSPNjvXvNZBgAAAAAAAAAAAAAAAARvM7RvM9jut+HaSMdYy5I89o5dgatLw3eItqJ5fRCwx4qY42pWKx2hmAAAj5tJhzR5qbT7xylV6vSX0/P5qfUvHlqxaJi0RMT1iQc2JOu034fL5fkt8vZGAAAAAAAAAAAABI0GL4uprE86xzleqzg1f5tvtCzAAAAAABo1mGM2ntXbnEbx91C6Vz2or4c+SPa0g1gAAAAAAAAAAAs+DTHhyx67xKyUnDcsY9TETPK/JdgAAAAAAOf1UxOpyTHraV5qMsYsNrz6Q57rznqAAAAAAAAAAAABE7TvHVeaHVRqMXP568rQo2WPJbHeL458MxIOjEPS6/HliK5NqX/SUzcAN4ABjkyUx18V7RWO6r1vEJyb48HKvrb3B5xLVfEv8PHPkr1n3lBAAAAAAAAAAAAAAbMOny5p2x0me/onYuF+ubJMdqgrerZi1OXFyplmO2+64poNNT+34u9ubdXFjr8uOsfaAVNeI6n3rP/LG/ENTP9W32qu9nkxE9YBztr2vO97TM953Y+robYMVo2tjrP8ApoycO09ulZr/AIyClE7NwzJXnitF+08pQr0tjnw3rMW9pgHgAAAAAAAAPa1m9orWN5mdoArWb2itY3mfRZ6XhtaxF9R5rfTHSG/RaSunrvPPJPWf2SgeRERG0RtD0AAAAAAAGGXDTNXw5KxMMwFLrdDfB56ebH+sIbptlRxDR/C/i4o8sz5qx6AggAAAAALThWn2j4945zyr2hW4qTkyVpXradnQ0rFKRWscojaAZAAAAAAAAAAAAPLRFqzW0bxMbS9AUGrwfh8009OsT7w0rfi2LxYYy/TPP7KgAAAAErhkROsrv6RMwu46AAAAAAAAAAAAAAADVq6xbTZYnp4Zc9HQAegA/9k="
    }
})

const userModel = mongoose.model("Instagram-clone-project",userSchema);

module.exports = userModel;