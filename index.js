const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")
const nodemon = require("nodemon")
const dotenv = require("dotenv").config()
const jwt = require("jsonwebtoken")
const customerRoutes = require("./routes/customerRoutes")
const recipeRoutes = require("./routes/recipeRoutes")
const connecteDB = require("./db/dbFile")


const app = express()

app.use(cors())


const PORT = process.env.PORT || 7800
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})
connecteDB()


// the forward slash api shows that our end isbackend
app.use("/api", recipeRoutes)
app.use("/api", customerRoutes)