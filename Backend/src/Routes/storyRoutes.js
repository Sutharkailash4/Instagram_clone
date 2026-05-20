const express = require("express");

const storyRoute = express.Router();

const authenticationMiddleware = require("../middleware/authMiddleware");

const storyControllers = require("../controllers/storyController");

const multer = require("multer");

const upload = multer({
    storage : multer.memoryStorage()
});

storyRoute.post(
    "/createStory",
    authenticationMiddleware,
    upload.single("story_image"),
    storyControllers.createStoryController
);

storyRoute.get(
    "/getStories",
    authenticationMiddleware,
    storyControllers.getStoriesController
);

storyRoute.delete(
    "/deleteStory/:storyId",
    authenticationMiddleware,
    storyControllers.deleteStoryController
);

module.exports = storyRoute;