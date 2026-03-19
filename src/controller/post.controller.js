const model = require(".././models/post.model");
const ImageKit = require("@imagekit/nodejs");
const {toFile} = require("@imagekit/nodejs");
const uploader = new ImageKit({
    Private_key : process.env.IMAGEKIT_PRIVATE_KEY
});

async function createUserPost(req,res){
    try{
        const user = await uploader.files.upload({
            file : await toFile(Buffer.from(req.file.buffer),"imageURL"),
            fileName : originalname
        })
        res.status(200).json({
            message : "Post Created Successfully",
            caption : req.body.caption,
            post : req.file,
            imagekit : user
        })
    }catch(error){
        res.status(400).json({
            message : "Something Went Wrong"
    })
    }
}

module.exports = {
    createUserPost
}