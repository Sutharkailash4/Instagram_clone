const model = require("../models/postModel");

const createPostController = async (req,res) => {
    try{
        console.log(req.body);
        res.status(200).json({
            message : "Api Work"
        })
    }catch(error){
        res.status(400).json({
            message : "Something Went Wrong"
        })
    }
}

module.exports = {
    createPostController
}