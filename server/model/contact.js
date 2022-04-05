const mongoose = require("mongoose");


const { Schema } = mongoose;

const contactSchema = new Schema({
    name: String,
    email: String,
    category: String,
    title: String,
    message:String , 
    isUser: Boolean , 
    created: { type: Date, default: Date.now },
  });
  

  contactSchema.set("toJSON" , {gettes:true})

  module.exports = mongoose.models.contact || mongoose.model("contact", contactSchema);