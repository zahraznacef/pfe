const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model("contacts", new Schema({
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject:{
      type:String,
      required:true
    },
    message:{
      type:String,
      required:true
    }
  })
);