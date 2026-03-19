const model = require(".././models/post.model");
const ImageKit = require("@imagekit/nodejs");
const {toFile} = require("@imagekit/nodejs");
const uploader = new ImageKit({
    Private_key : process.env.IMAGEKIT_PRIVATE_KEY
});

async function createUserPost(req,res){
    try{
        if(!req.file){
            return res.status(409).json({
                message : "Post is Required"
            })
        }
        const {caption} = req.body;
        const post = await uploader.files.upload({
            file : await toFile(Buffer.from(req.file.buffer),"imageURL"),
            fileName : req.file.originalname
        })
        res.send(post);
    }catch(error){
        res.status(400).json({
            message : "Something Went Wrong"
    })
    }
}

module.exports = {
    createUserPost
}