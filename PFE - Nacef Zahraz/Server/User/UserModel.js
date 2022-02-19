const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model("user", new Schema({
    fullname: {
      type: String,
      required: true,
      min : 3,
      max : 20
    },
    phonenumber:{
      type:String,
      required:true
    },
    email:{
      type:String,
      trim : true,
      required:true
    },
    password:{
      type:String,
      required:true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default: 'user'
    }
  })
);