const mongoose=require('mongoose');
const {Schema}=mongoose;

const Cart=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    product:{
        type:String,
        required:true,
    },
    count:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model('Cart',Cart);