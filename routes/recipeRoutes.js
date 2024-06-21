const express = require("express")

const recipeRoutes = express.Router()

const {  createRecipe, createFavoriteRecipe, recipeDataDetails, rescipeSingleData, updateRecipeData, deleteRecipe, addRecipe } = require("../controllers/recipeControl")


//const recipeRouter = require("routes/customerRoutes")

// Recipe Phase
// instead of the request to hit our app directly we are going to use router for instance, instead of app.post || app.get() i will be introducing router.post
recipeRoutes.post("/createRecipe", createRecipe)
// here the router will be handling the equest

recipeRoutes.post("/createFavouriteRecipe", createFavoriteRecipe)

recipeRoutes.get("/getAllRecipe", recipeDataDetails,)


recipeRoutes.get("/getOneRecipe", rescipeSingleData)


recipeRoutes.patch("/updateRecipe", updateRecipeData)

recipeRoutes.delete("/deleteRecipe", deleteRecipe)

recipeRoutes.post("/addRecipe", addRecipe)
// app.post("/credit_User_account", verifyUser, updateRecipe)


module.exports = recipeRoutes


