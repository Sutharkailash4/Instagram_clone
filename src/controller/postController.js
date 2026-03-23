const model = require(".././models/postModel");
const ImageKit = require("@imageKit/nodejs");
const client = new ImgeKit({
    private_key : process.env.IMAGEKIT_PRIVATE_KEY
});

const createPostController = async (req,res) => {
    try{
        const uploadToImagekit = await client.files.upload({
            file : req.file,
            filename : req.file.originalname
        });
        res.status(201).json({
            message : "Post Created Successfully",
            caption : req.body.caption,
            post_image : req.file,
            uploadToImageKit = uploadImageKit
        })
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