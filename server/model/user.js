const mongoose = require("mongoose");


const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  phoneNumber: Number,
  created: { type: Date, default: Date.now },
});

userSchema.set("toJSON" , {gettes:true})
userSchema.options.toJSON.transform = (doc , ret)=>{
    const obj = {...ret}
    delete obj.password
    delete obj._id 
    delete obj._v
    return obj
}

module.exports = mongoose.model.User || mongoose.model("User", userSchema);
