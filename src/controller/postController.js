const model = require(".././models/postModel");
const ImageKit = require("@imageKit/nodejs");

const createPostController = async (req,res) => {
    try{
        console.log(req.body);
        console.log(req.file.originalname);
        res.send("Ok");
    }catch(error){
        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

module.exports = {
    createPostController
}