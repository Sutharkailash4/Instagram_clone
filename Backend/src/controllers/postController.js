const ImageKit = require("@imagekit/nodejs");
const model = require(".././models/postModel");

const client = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

const createPostController = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(409).json({
                message: "Post Image is Required For Creating Post"
            })
        }

        const response = await client.files.upload({
            file: req.file.buffer.toString("base64"),
            fileName: req.file.originalname,
            folder: "/instagram-clone-posts"
        });

        const post = await model.create({
            caption: req.body.caption,
            post_image: response.url,
            user: req.user.id
        });

        res.status(201).json({
            message: "Post Created Successfully",
            post
        })

    } catch (error) {

        console.error(error);

        res.status(400).json({
            message: "Something Went Wrong",
            error: error.message
        })
    }
}

const getPostController = async (req, res) => {
    try {

        const posts = await model.find({
            user: req.user.id
        }).populate("user", "-password");

        if (posts.length === 0) {
            return res.status(400).json({
                message: "No Post Created By User"
            })
        }

        res.status(200).json({
            message: "Post Fetched Successfully",
            posts
        })

    } catch (error) {

        console.error(error);

        res.status(400).json({
            message: "Something Went Wrong",
            error: error.message
        })
    }
}

const getPostDetailsController = async (req, res) => {
    try {

        const post_id = req.params.postId;

        const post = await model.findOne({
            _id: post_id
        }).populate("user", "-password");

        if (!post) {
            return res.status(400).json({
                message: "Invalid Id ! Post Not Exists "
            })
        }

        const isUserAuthorized = req.user.id === post.user._id.toString();

        if (!isUserAuthorized) {
            return res.status(400).json({
                message: "User Not Authorized"
            })
        }

        res.status(200).json({
            message: "Post Details Fetched Successfully",
            post
        })

    } catch (error) {

        console.error(error);

        res.status(400).json({
            message: "Something Went Wrong",
            error: error.message
        })
    }
}

module.exports = {
    createPostController,
    getPostController,
    getPostDetailsController
}