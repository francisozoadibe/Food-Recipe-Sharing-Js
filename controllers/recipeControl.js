// if you want to save, you are to import the model 
// const Recipe = require("./model/recipeModel")
// const Customer = require("./model/customereModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { sendEmail } = require("../middlewares/sendEmail")
const { verifyCustomer } = require("../middlewares/middleware")
const { validateRecipe}  = require("../middlewares/authValidation") // isValidEmail }
const customer = require("../model/customerModel")
const Recipes = require("../model/recipeModel")



const createRecipe  = async(request, response)=>{
    try {
        // are the data we need from the user
        const { Title, Ingredients, Instructions, author, tags, created_at, userEmail, emailSubject} = request.body
        // this line you are getting the structure data in your model from the recipe. NB Return keyword tell us that  that process should not continue, ie the code should end or terminate there

        if(!Recipe){
            return response.status(400).json({message:"Enter a new recipe name"})
            }
            // 1. if there is no recipe, please add recipe

        const existingRecipe = await Recipe.findOne({Title})
            // 2. here i am finding a customer by there emails, and if it find something then existingCustomer will have a value by if it does not, existingCustomer will not have a  value
        if(existingRecipe){
            return response.status(400).json({message:"Select another a new Recipe"})
              
        }
        

           

            // i am creating new user object or i am passing new user object and saving 
        const newRecipe = new Recipe({ Title, Ingredients, Instructions, author, tags, created_at })
            await newRecipeName.save()
            // here i am saving the new user


            // 4. send customer email that there account creation was successful



            // here we are returning the new user object
                return response.status(200).json({message:"Recipe Added Successful",
            // comment user: newUser with hashedPasword
            // user: {... newUser, password: ""}

            // new: newUser
            // or
            Recipe: {Title, Ingredients, Instructions, author, tags, created_at}
            // here i am assigning an empty string
            })
            // since the user details is visible to the frontend devlopers should not be, i will be using spread operators. for instance, user:{...newUser, password: ""}, here the user is becoming a new object and inside the object i am spreading it. hence, whenever you see 3 dot ... it means you are spreading, you can spread an array and you can spread an object

        // send emails
        const response = await sendEmail(fullName, email, emailSubject)
            return response.status(200).json({message:"Email sent"})
    }catch (error){
        return response.status(400).json({message:"Unsuccessful"})
    }
}

const createFavoriteRecipe = async (request, response) => {
     // Data extraction from the request body
     const { title, ingredients, instructions, categories, tags, created_at } =
     request.body;
   // Extracting the recipeOwnerId from the request paramaters
   const recipeOwnerId = request.user._id;
   try {
     const customer = await CustomerModel.findById(recipeOwnerId);
     if (!customer) {
       return response.status(404).json({
         success: false,
         error: "Customer not found",
       });
     }
     const favouite = await RecipeModel.create({
       recipeOwnerId: user._id,
       recipeOwner: user.username,
       title,
       ingredients,
       instructions,
       author, 
       categories,
       tags,
       created_at
     });
     response.status(201).json({
       success: true,
       recipe,
     });
   } catch (error) {
       response.status(401).json({
       success: false,
       error: error.message,
     });
   }
   const favouriteRcipe = new favouriteRcipe({ Title, Ingredients, Instructions, author, tags, created_at })
            await newfavouriteRcipe.save()
            // here i am saving the new user
}
   

  // i will be creating functions to handle account balance
const recipeDataDetails = async(request, response)=>{
    try {
        const customerRecipeHistory = await Recipes.find()
        // here we are creating a new vriable userBalance and auth the find will find all user balances and update it accordingly
        return response.status(200).json({message:"The following are your Recipes",
        // to know how many Transactions we just need to add count: trans.length
        count: Recipes.length,
        Recipes
        
        })
    }catch (error){
        return response.status(200).json({message:"Delivered"})
    }
    }


// getting account details of only one user
const rescipeSingleData = async(resquest, response)=>{

    try {
        // get account details of one customer, you need to know the id of that particular customer and the id should be sent in the request params
        const { id } = request.params
    
        const customer = await Recipe.findById(id)
        // we are saying that our model should return our custmer and return the id


    return response.status(200).json({message:"Customer Recipe History Updated successful"})
    }catch (error){
        return response.status(200).json({message:"Sucecessful"})
    }
}
    
// here i will be updating my account balance of customers or updating customer password
const updateRecipeData = async(request, response)=>{
    try {
            // it will take the id of the customer from the requeat.params
        const { id } = request.params
        
        const { RecipeData } = request.body

        // here i will be creating updated account by id and it will accept three objects
        const updatedRecipe = await Recipe.findByIdAndUpdadte(
            id,
            { recipeDataDetaails },
            // adding { new: true } will return the current Recipe History of the customer or new details
            {new: true}
        )
        return request.status(200).json({message:"Account Credited Successfull"})
        customer: updatedRecipe
        // this how to either update/change password details or if you want to update notifications

}catch (error){
    return response.status(200).json({message:"Successful"})
}
    }
    

// Deleting a customer or an account of a user

const deleteRecipe = async(resuest, response)=>{
    try {
        // for you to delete a user you need to get there id from the request.params
        const { id } = request.params
        const deleteRecipe = await Recipe.findByIdAndDelete(id)
        return request.status(200).json({message:"Customer sucessful removed or deleted"})
        }catch (error){
            return response.status(200).json({message:"Successful"})
    }
}

const  addRecipe = async(request, response)=>{
    try {

        // we are accepting the usre
        const RecipeName = request.RecipeName
        // we already know who the user is
               
        return response.status(200).json({message:"recipe successfully added"})
        RecipeName
    }catch (error){
        return response.status(200).json({message:"Successful"})
    }
    }
    

module.exports = {
    createRecipe,
    createFavoriteRecipe,
    recipeDataDetails,
    rescipeSingleData,
    updateRecipeData,
    deleteRecipe,
    addRecipe
}