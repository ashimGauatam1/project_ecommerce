const mongoose=require('mongoose');
const {Schema}=mongoose;

const Cart=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    product:{
        type:String,
        required:true,
    }
    // price:{
    //     type:Number,
    //     required:true,
    // },
    // description:{
    //     type:String,
    //     required:true,
    // },
    // quantity:{
    //     type:Number,
    //     required:true,
    // }
})

module.exports=mongoose.model('Cart',Cart);