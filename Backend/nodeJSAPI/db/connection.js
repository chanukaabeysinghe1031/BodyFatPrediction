const mongoose = require('mongoose');

const URI = "mongodb+srv://admin:admin@depressionreductionsyst.rwivy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectDB = async () =>{
    await mongoose.connect(URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true,
    });
    console.log("DEPRESSION APP DATABASE CONNECTION HAS BEEN SET UP!")
}

module.exports = connectDB;