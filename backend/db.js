const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://ashimgautam:4Xlpsdib8NZbEqic@ashim.yw7ju.mongodb.net/?retryWrites=true&w=majority&appName=Ashimg";

const mongoConnect = async () => {
    try {
        await mongoose.connect(mongoURL, {
            connectTimeoutMS: 30000, 
            socketTimeoutMS: 45000, 
            dbName:"Ecommerce"
        });
        console.log("Connected to MongoDB");
    } 
    catch (error) {
        console.error("Error in MongoDB connection:", error.message);
    }
};

module.exports = mongoConnect;
