const model = require(".././models/postModel");
const ImageKit = require("@imagekit/nodejs");
const {toFile} = require("@imagekit/nodejs");
const client = new ImageKit({
    private_key : process.env.IMAGEKIT_PRIVATE_KEY
});

const createPostController = async (req,res) => {
    try{
        if(!req.file) return res.status(409).json({message : ""})
        const token = req.cookie.access_token;
        console.log(token);
        const uploadToImagekit = await client.files.upload({
            file : await toFile(Buffer.from(req.file.buffer),"post_image"),
            filename : req.file.originalname
        });
        // res.status(201).json({
        //     message : "Post Created Successfully",
        //     caption : req.body.caption,
        //     post_image : req.file,
        //     imageKit_data : uploadToImagekit
        // })
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

console.log("Hello World") 