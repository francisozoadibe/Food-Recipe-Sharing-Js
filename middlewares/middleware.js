const jwt = require("jsonwebtoken")
const customer = require("../model/customerModel")

const validateCustomer = async(request, response, next)=>{
    try {
         // the next function is a command that tells your middleware to proceed to the next stage
         const { email, password } = request.body
    
         let   errors = []
             // here i am creating empty array called errors
     // and NB one can only use response keyword word once, so, the need for this errors.push arises
         if(!email){
             errors.push("Please Enter Email")
                 // instead of using return keyword you use errors.push
         }else if(!isValidEmail){
             errors.push("invalid Email")
             }
         if(!password){
             errors.push("Please Enter Your Password")
         }else if(password.length > 6){
             errors.push("password must be 6 characters")
         }else if(!/[0-9]/.test(password)){
             errors.push("Password must contain a number")
                 // here i am checking if the password contains a number
             }
         if(errors.length > 0){
             return response.status(400).json({message:errors})
                 // here i am returning all the errors
     // email validation, if the email a client enter passes this pattern that means is a valid email
         }
     
         next()
     // i am calling the next function to the next function is a command that tells your middleware to proceed to the next stage
    }catch (error){
        return response.status(200).json({message:error.message})
    }

    //  try { 

    //  }catch (error){
    //     return response.status(200).json({message:error.message})
    //  }
// const isValidEmail = async(email)=>{
//     const emailPattern = /^  [a-zA-Z0-9._%+@[a-zA-Z0-9.-]+|.[a-zA-Z]{2,}$/
//     return emailPattern.test(email);
//      }
   
}
  
          
    
    
    
module.exports = {
    validateCustomer,
    // isValidEmail
    // why i am exporting the function so that, it can be use any in the program
}