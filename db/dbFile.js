const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const connecteDB = async(request, response)=>{
    await mongoose.connect(process.env.MONGOOSE_URL)
    console.log(" MongoDB is connected...")
}    
 

module.exports = connecteDB