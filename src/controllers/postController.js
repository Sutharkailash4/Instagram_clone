const jwt = require("jsonwebtoken");
const ImageKit = require("@imagekit/nodejs");
const client = new ImageKit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY
});

const createPostController = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(409).json({
                message: "Post Image is Required For Creating Post"
            })
        }
        res.send(req.file);        
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