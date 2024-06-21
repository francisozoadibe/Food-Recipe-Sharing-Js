const express = require("express")
const jwt = require("jsonwebtoken")


// here, the customerRouter will be handling the request not the app, and this router is coming from express
const customerRoutes = express.Router()


const {  customerRegister, customerLogin, customerDataDetails, customerSingleDetails, updateCustomerDetails,
deleteCustomer, passwordRecovery, resetPassword, disableCustomer, validCustomer, addCustomers } = require("../controllers/customerControl")

const authValidation = require("../middlewares/authValidation")
const sendEmail = require("../middlewares/sendEmail")
const { validateCustomer } = require("../middlewares/middleware")


// home url 
customerRoutes.get("/", (resquest, response)=>{
    return response.status(200).json({message: "Welcome to Recipe App"})
})



customerRoutes.post("/register",  authValidation, customerRegister)
// create a file that will handle your functions

// here i am going to use get request to get all users using ID

customerRoutes.get("/customer-details", customerDataDetails)
// then go to your function to handle user balance in your functions.js

// you can as well use this other way of importing

// app.get("/account_Balance", function.handleAccountBalance)


// i will creating the api for our new function to handle or return one user. and ensure you import the function and add it to the endpoint below
customerRoutes.get("/onecustomer/:id", customerSingleDetails)
// since our function is expecting an id in functions.js file our endpoint should be also expecting an id app.get("/onecustomer/:id") this means that the endpoint is expecting an id at the end  


customerRoutes.patch("/updateCustomer/:id", updateCustomerDetails)


// the api to handle delete customer
customerRoutes.delete("/delete_customer/:id", deleteCustomer) 

customerRoutes.post("/sign_in", customerLogin)

customerRoutes.post("/password_recovery", passwordRecovery)

customerRoutes.post("/reset_password",  authValidation, resetPassword)

customerRoutes.post("/validate_data", validateCustomer)
//verifyCustomer)



module.exports = customerRoutes


