const mongoose=require('mongoose');
const mongoURL="mongodb://localhost:27017/ecommerce";

const mongoConnect=()=>{
    try {
    mongoose.connect(mongoURL);   
    console.log("connected to mongoDB") ;   
    } 
    catch (error) {
        console.log("error in connection")
    }
}

module.exports=mongoConnect;