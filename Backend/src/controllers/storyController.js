const ImageKit = require("@imagekit/nodejs");

const storyModel = require("../models/storyModel");

const client = new ImageKit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
});

const createStoryController = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                message : "Story Image is Required"
            })
        }

        const response = await client.upload({
            file : req.file.buffer.tostring("base64"),
            fileName : req.file.originalname,
            folder : "/instagram-clone-stories"
        });

        const story = await storyModel.create({
            story_image : response.url,
            user : req.user.id
        });

        res.status(201).json({
            message : "Story Created Successfully",
            story
        })

    } catch (error) {

        console.error(error);

        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

const getStoriesController = async (req, res) => {
    try {

        const stories = await storyModel.find()
        .populate("user", "-password")
        .sort({ createdAt : -1 });

        res.status(200).json({
            message : "Stories Fetched Successfully",
            stories
        })

    } catch (error) {

        console.error(error);

        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

const deleteStoryController = async (req, res) => {
    try {

        const storyId = req.params.storyId;

        const story = await storyModel.findById(storyId);

        if (!story) {
            return res.status(404).json({
                message : "Story Not Found"
            })
        }

        const isUserAuthorized = req.user.id === story.user.toString();

        if (!isUserAuthorized) {
            return res.status(401).json({
                message : "Unauthorized User"
            })
        }

        await storyModel.deleteOne({
            _id : storyId
        });

        res.status(200).json({
            message : "Story Deleted Successfully"
        })

    } catch (error) {

        console.error(error);

        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

module.exports = {
    createStoryController,
    getStoriesController,
    deleteStoryController
}