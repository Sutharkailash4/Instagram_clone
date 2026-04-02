const jwt = require("jsonwebtoken");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const model = require(".././models/postModel");
const client = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

const createPostController = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(409).json({
                message: "Post Image is Required For Creating Post"
            })
        }
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(400).json({
                message: "Token Not Provided ! Unauthorized Access"
            })
        }
        const user = jwt.verify(token, process.env.JWT_ACCESS_TOKEN);
        const response = await client.files.upload({
            file : req.file.buffer.toString("base64"),
            fileName: req.file.originalname,
            folder: "Instgarm-clone-posts"
        });
        const post = await model.create({
            caption : req.body.caption,
            post_image : response.url,
            user : user.id
        })
        
    } catch (error) {
        res.status(400).json({
            message: "Something Went Wrong",
            error: error.message
        })
    }
}

const getPostController = async (req, res) => {
    try {

    } catch (error) {
        res.status(400).json({
            message: "Something Went Wrong",
            error: error.message
        })
    }
}

const getPostDetailsController = async (req, res) => {
    try {

    } catch (error) {
        res.status(400).json({
            message: "Something Went Wrong"
        })
    }
}

module.exports = {
    createPostController,
    getPostController,
    getPostDetailsController
}