const model = require(".././models/post.model");
const imageKit = require("@imagekit/nodejs");
const {toFile} = require("@imagekit/nodejs");
const client = new imageKit({
    PrivateKey : process.env.IMAGEKIT_PRIVATE_KEY
});

async function postCreateController(req,res){
    try{
       if(!req.file){
        return res.status(400).json({
            message : "Post Image is Required"
        })
       } else {
        const {caption} = req.body;
        const post = await client.files.upload({
            file : await toFile(Buffer.from(req.file.buffer,"imageURL")),
            fileName : "Filename"
        })
        res.status(200).json({
            message : "Post Created Suucessfully",
            caption : caption,
            post : post
        })
       }
    }catch(error){
        res.status(400).json({
            message : "Something Went Wrong"
        })
    }
}

module.exports = {
    postCreateController
};