const model = require(".././models/post.model");

async function postCreateController(req,res){
    try{
       res.status(200).json({
        message : "Post Created Successfully",
        post : req.body,
        file : req.file 
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