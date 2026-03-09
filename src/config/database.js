const mongoose = require("mongoose");

const ConnectedToDatabase = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected To Database Successfully");
    }catch(error){
        console.log('Failed To Connect To Database');
    }
}

module.exports = ConnectedToDatabase;