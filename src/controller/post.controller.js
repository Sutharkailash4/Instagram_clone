const model = require(".././models/post.model");

async function postCreateController(req,res){
    try{
       const data = req.body;
       res.status(200).json({
        message : "Post Created Successfully",
        post : {
            caption : data.caption,
            imageURL : data.imageURL
        }
       })
    }catch(error){
        res.status(400).json({
            message : "Something Went Wrong"
        })
    }
}

module.exports = {
    postCreateController
}