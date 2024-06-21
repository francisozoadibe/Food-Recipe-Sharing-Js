// if you want to save, you are to import the model 
// const Recipe = require("./model/recipeModel")
// const Customer = require("./model/customereModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const sendEmail  = require("../middlewares/sendEmail")
const verifyCustomer = require("../middlewares/middleware")
const { validateCustomer, isValidCustomer } = require("../middlewares/authValidation")
const customers = require("../model/customerModel")
const recipes = require("../model/recipeModel")




const customerRegister  = async(request, response)=>{
    try {
        //  here I am accepting data from users and what data do we want? go back to model and see your Schema. and these are the data we need from the user
        const { fullName, email, Password, phoneNumber, address, userEmail, emailSubject} = request.body
   
        if(!email){
            return response.status(400).json({message:"You must enter your a valid email address"})
        }
       

    const existingCustomer = await customer.findOne({email})
       
    if(existingCustomer){
        return response.status(400).json({message:"Customer exist with this account"})
    }
    
    const hashedPassword = await bcrypt.hash(Password, 14)
       
        console.log(hashedPassword)


        console.log({ fullName, email, phoneNumber, address, Password:hashedPassword})
        // console.loging the data

        // i am creating new user object or i am passing new user object and saving 
    const newCustomer = new Customer({ fullName, email, Password, phoneNumber, address })
        await newCustomer.save()
        // here i am saving the new user



        // here we are returning the new user object
            return response.status(200).json({message:"Successful",
        // comment user: newUser with hashedPasword
        // user: {... newUser, password: ""}

        // new: newUser
        // or
        customer: {email, fullName, phoneNumber}
        // here i am assigning an empty string
        })
        // since the user details is visible to the frontend devlopers should not be, i will be using spread operators. for instance, user:{...newUser, password: ""}, here the user is becoming a new object and inside the object i am spreading it. hence, whenever you see 3 dot ... it means you are spreading, you can spread an array and you can spread an object

    // send emails
    const response = await sendEmail(fullName, email, emailSubject)
        return response.status(200).json({message:""})

    }catch (error){
        return response.status(200).json({message:"Successful"})
    }
}

const customerLogin = async(request, response)=>{

   try {

        const {email, password} = request.body

        if(!email || !password){
            return response.status(400).json({message:"Email and passwords required"})
        }
        // get user details
        // check user if the exist in your database
        const customer = await customer.findOne({email})

        if(!customer){
            return response.status(404).json({message:"this customer account does not exist!"})
        }

        const isMatched = await bcrypt.compare(password, customer.password)

        if(!passwordMatch){
            return response.status(400).json({message:"Incorrect Email or Password"})
        }

        // here to check if user account is active
        if (customer.active === false ){
            return response.status(401).json({message:"User not found"})
        }
        // getnerate a token that wil grant user access to app/site matched the hashedPassword
        // JSONWEbTOKENs || passport
    // go to terminal and install jsonwebtoken npm install jsonwebtoken

        const customerPayload = { 
            id: customer._id,
            email: customer.email
        }

        const accessToken = await jwt.sign(customerPayload, process.env.accessToken, {expiresIn:"5m"})
            return response.status(200).json({message: "Login Successful"})
            accessToken,
            customer

    }catch (error){
        
        return response.status(200).json({message:"Successful"})
    }
}

const customerDataDetails = async(request, response)=>{
    try {
        const customerDetails = await Customer.find()        
        return response.status(200).json({message:"You account Balance is",
    // to know all the details i use count: trans.length
            count: Customer.length,
            Customer
        })
    }catch (error){
        return response.status(200).json({message:error.message})
    }
    }


// getting data details of only one customer
const customerSingleDetails = async(resquest, response)=>{

    try {
        // getting data details of one customer, you need to know the id of that particular customer and the id should be sent in the request params
        const { id } = request.params
        // or other developers write it this way,  const id = request.params.id, nb we need to accept the id of a customer,then we create a variable


        // you can also validate like this

        // if(!id){
        //     return response.status(404).json({message:"finTrans has no customer with that name"})
        // }

        // the above code will throw an error since our end point is expecting an id, to solve is either you remove the /:id or remoe the above validation

        const customer = await Customer.findById(id)
        // we are saying that our model should return our custmer and return the id


        return response.status(200).json({message:"Customer Recipe History Updated successful"})
    }catch (error){
        return response.status(200).json({message:"Successful"})
    }
}
    
// here i will be updating the data of customers 
const updateCustomerDetails = async(request, response)=>{
    try {
            // it will take the id of the customer from the requeat.params
        const { id } = request.params
        
        const { RecipeHistory } = request.body

        // here i will be creating updated account by id and it will accept three objects
        const updatedCustomer = await Customer.findByIdAndUpdadte(
            id,

            { customerData },
            // adding { new: true } will return the current Customer  History of the customer or new details
            {new: true}
        )
        return request.status(200).json({message:"Customer Details Updated Successful"})
        customer: updatedCustomer
        // this how to either update/change password details or if you want to update notifications

        }catch (error){
            return response.status(200).json({message:"Successful"})
        }
    }
        

    // Deleting a customer or an account of a user

const deleteCustomer = async(resuest, response)=>{
    try {
        // for you to delete a user you need to get there id from the request.params
    const { id } = request.params
    const deleteData = await Customer.findByIdAndDelete(id)
    return request.status(200).json({message:"Customer sucessful removed or deleted"})
    }catch (error){
        return response.status(200).json({message:"Successful"})
    }
    
}
        
// export all the new function created in our function.js files

// handle password recovery  
const passwordRecovery = async(request, response)=>{
    try {

        const { email } = request.body
        const customer = await Customer.findOne(({ email }))

        if(!customer){
            return response.status(404).json({message:"user not found"})
        }
        
    // this is how mongodb reference id .id: user._id
        const customerPayload = {
            id: customer._id,
            email: customer.email
        }

    // here you are generating access token'/
        const accessToken = jwt.sign(customerPayload, process.env.accessToken, {expires:"10m"})
    // if the user in careerEx forgot there passowrd this is how to send them password reset email and the code will run by sending email directly to 
        const websiteURL = `www.careerEx.com/${accessToken}`
    // when a user click on this it redirect to the site where the will enter there neww password and also the fronend will have access to this token

        
        return response.status(200).json({message: "successful"})
        }catch (error){
            return response.status(200).json({message:error.message})
        }
}

// here i will be implementing code to reset password and ou are expecting something from the cusstomer or user, and the reset will update the password
const resetPassword = async(request, response)=>{
    try {
        const { password, email } = request.body

        const customer = await findOne({ email})
        if(!customer){
            return response.status(500).json({meassage:"User not Found"})
        }
    // here if there is a user hash there passwords
        if(customer){
        const hashedPassword = await bcrypt.hash(password,  14)
    // here i am senting the user password to the hashedPassword
        customer.password = hashedPassword

        await customer.save()
        // saving the new user we can see that, we save during reset but didnt save password recovery// forgotten password
        }

        return response.status(200).json({message:"Passweord Reset Succesffuly"})
    }
    catch (error){
        return response.status(200).json({message:"Successful"})
 // NB the frontend developers will send you back the access token because you need to know the user/ the owner of the password before you will sending back the access access token
    }
} 
const disableCustomer = async(request, response)=>{
   try {
     // you get the user or admin and both have token
     const id = request.params
     const customer = await findById(id)
     if(!customer){
         return response.status(500).json({message:"User not found"})
         customer.active = false
         await customer.save()
     }
   }catch (error){
    return response.status(200).json({message:"Successful"})
   }
}

//  const validCustomer = async(request, response)=>{
//      try{
//          return response.status(200).json({message:"Successful on on the api"})
//     }catch (error) {
//          return response.status(200).json({message:error.message})
        
        
//      }
//      }
//  const  addCustomers = async(request, response)=>{
//     try {

//     }catch (error){
//         return response.status(200).json({message:error.message})
//     }
//     }

module.exports = {
    customerRegister,
    customerLogin,
    customerDataDetails,
    customerSingleDetails,
    updateCustomerDetails,
    deleteCustomer,
    passwordRecovery,
    resetPassword,
    disableCustomer,
    // validCustomer,
    // addCustomers
}
    