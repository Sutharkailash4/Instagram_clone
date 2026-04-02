const createPostController = async (req, res) => {
    try {
        console.log(req.file);
        console.log(req.body);
        if (!req.file) {
            return res.status(409).json({
                message: "Post Image is Required For Creating Post"
            })
        }
        res.send("ok");
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