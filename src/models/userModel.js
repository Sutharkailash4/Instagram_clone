const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, "Username is Required"]
    },
    email : {
        type : String,
        required : [true, "Email is Required"],
        unique : [true, "Please Enter Unique Email"]
    },
    password : {
        type : String,
        required : [true, "Password is Required"]
    },
    bio : {
        type : String,
        default : ""
    },
    profile_image : {
        type : String,
        default : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAnAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EAC8QAQACAQIEBAQFBQAAAAAAAAABAgMEEQUhMUESIlFhEzJScRQjgZHRMzRDYnL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+kgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAn6Hh/xojJm5UnpHeQQa1tedq1m0+kQ3Ro9TMbxhsvseKmKvhx1isez2Dm76fNjjfJjtWPs1uoRNTocWfe0R4L/VHcFENmbDfBkmmSOfb3awAAAAAAAAAAAAS+G6f4+be8b0pzn7ryI2ROGY/BpKz3tzlMAAAABG12mjUYZiI88c6qDp16uoUHEMfw9XkiI2iecAjAAAAAAAAAAAA6LR/wBpi2+mG5C4Vk8elivenJNAAAAAUvGNvxcf8QuZc/rssZdVe0dI5QDQAAAAAAAAAAACToNR+Hzbz8luVl9WYtETHOJ7uYS9Hrr6fyz5qenoC9GnDqsOaPy7xM+nduAGLWisb2mIj1lA1XEqY4muHz29e0A2cQ1VcGPw1n8y3T291G9ZL2yXm95mbTO8y8gAAAAAAAAAAAADNa2vaK0ibWnpEJ+n4Xe8b5reH/WOoK97rlyxHLJePtaV5j0Onp/jiZ9bc26MWOI2ilf2BzdrWtPmm1p953YdHfT4bxtbFSf0Rc3DMN/6e9J/eAUw36jR5sHO0b1+qOjQAAAAAAAAAAA3aXTX1N/DTlEdbT2Y02C2oyxSv6z6Qv8ABiphxxSkbRAPGm02PT12pXn3tPWW8AAAAAYmImNpjeFZreHRtOTTxz70/haAOXFtxPRRaJzYo80fNEd/dUgAAAAAAAlcNxfF1Vd/lr5pBaaDTxgwxE/PbnZKAAAAAAAAAGJUfEdP8DPM1jyW5x/C9ReI4fi6W3Lea+aAUIAAAAAC14JWPBlt33iGAFoAAAAAAAAAAxMbxsAOZtytaPSZYAAAH//Z"
    }
});

const userModel = mongoose.model("Instagram-allUsers",userSchema);

module.exports = userModel;