const model = require(".././models/postModel");
const ImageKit = require("@imagekit/nodejs");
const {toFile} = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");
const client = new ImageKit({
    private_key : process.env.IMAGEKIT_PRIVATE_KEY
});

const createPostController = async (req,res) => {
    try{
        if(!req.file) return res.status(409).json({message : ""})
        
        const token = req.cookies.access_token;

        if(!token){
            return res.status(409).json({
                message : "Token Not Provided ! Unauthorized Access"
            })
        }

        const user = jwt.verify(token, process.env.JWT_ACCESS_TOKEN);

        const uploadToImagekit = await client.files.upload({
            file : await toFile(Buffer.from(req.file.buffer),"post_image"),
            fileName : req.file.originalname,
            folder : "/all_posts"
        });

        const userPost = await model.create({
            caption : req.body.caption,
            post_image : uploadToImagekit.url,
            user : user.id
        })

        res.status(201).json({
            message : "Post Created Successfully",
            caption : userPost.caption,
            post_image : userPost.post_image,
            user_id : userPost.user
        })
    }catch(error){
        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
} 

const getPostController = async (req,res) => {
    try{
        const user = req.cookies.access_token;
        if(!user){
            return res.status(409).json({
                message : "Token Not Provided ! Unauthorized Access"
            })
        }
        const decoded = jwt.verify(user, process.env.JWT_ACCESS_TOKEN);

        console.log(decoded);

        const findUser = await model.find({decoded});
        if(!findUser) {
            return res.status(409).json({
                message : "User Not Exists"
            })
        }

        res.status(200).json({
            message : "User get Successfully",
            user : findUser
        })
        
    } catch (error) {
        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

module.exports = {
    createPostController,
    getPostController
}