const jwt = require("jsonwebtoken")
const customer = require("../model/customerModel")

const verifyCustomer = async(request, response, next)=>{
     try {

           // get user token from the head
     const tk = request.header("Authorization")
     // the fronend guys

     // here we are splitting the token
     const tokenarray = tk.split(" ");

     // here we are taken only the token code without the bearer
     const token = tokenarray[1]

     // to verify your token you need to import the the token i.e we are using jwt token so we need to import the jwt token above in other to verify it.
     const verifiedToken = jwt.verify(token, `${ process.env.accessToken }`)
     

     if(!verifiedToken){
        return response.status(401).json({message:"Access Denied"})
     }
// import your model above, & i am finding & verifying a user by their email and verifying them with our token
     const customer = await customer.findOne({email:  verifiedToken.email})
     //  const user = await Customer.findOne({_id:  verifiedToken._})

     if(!customer){
        return response.status(401).json({message: "User Does not Exist  || User is not found"})
     }


     console.log({verifiedToken})
 
// here we found a user and we attaching it to the request
     request.customer = customer

    next() 

     }catch (error){
          return response.status(200).json({message: "Successful"})
     }
}
    

module.exports = verifyCustomer