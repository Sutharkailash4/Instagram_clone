const mongoose = require("mongoose");

const ConnectedToDatabase = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected To Database Successfully");
    }).catch((error)=>{
        console.log("Failed To Connect");
        console.error(error);
    })
}

module.exports = ConnectedToDatabase;