const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_schema = new Schema({
    full_name:{
        type:String,
        required: true,
        unique:true,
    },
    user_name:{
        type:String,
        required: true,
        unique:true,
    },
    age:{
        type:Number,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique:true,
    }, 
    address:{
        type:String,
        required: true,
        unique:true,
    },
    image:{
        type:String,
        required: true,
        unique:true,
    },
    user_cv:{
        type:String,
        required: true,
        unique:true,
    }
});

const user = mongoose.model("user", user_schema);
module.exports = user;