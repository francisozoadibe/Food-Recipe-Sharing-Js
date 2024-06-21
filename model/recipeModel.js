const mongoose = require("mongoose")
const { Schema, model } = require("mongoose")

const recipeSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Ingredients: {
    type: Array,
    required:true
  },
  Instructions: {
    type: String,
    required:true
  },
  Author: {
    type: String,
    required: true
  },
  tags: {
    type: String,
    required: true
  },
  created_at: {
    type: String,
    required: true
  }, 
  active:{ type: Boolean,default: true
  }, 
});



const Recipes = new model ("Recipes", recipeSchema)


module.exports = Recipes