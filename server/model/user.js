const mongoose = require('mongoose');

const {Schema} = mongoose

const userSchema = new Schema({
    name: String,
    email : String,
    password : String,
    phoneNumber : Number ,
    created : {type:Date , default:Date.now},
})

module.exports = mongoose.model("User" , userSchema)