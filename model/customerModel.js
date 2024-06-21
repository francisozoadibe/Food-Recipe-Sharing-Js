const mongoose = require("mongoose")

const { Schema, model } = require("mongoose")

const customerModel = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: Array,
    required:true
  },
  password: {
    type: String,
    required:true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    require: true
  },
  active:{ type: Boolean,default: true
  }
});



const Customers = new model("Customers", customerModel)


module.exports = Customers