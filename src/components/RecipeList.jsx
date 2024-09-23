// import { useState } from "react"
// import {Routes, Route, Link} from "react-router-dom"
// import RecipeCard from "./RecipeCard"
// import Recipes from "../data/recipes.json"
// import RecipeDetails from "../pages/RecipeDetails.jsx"
// previous lines not needed, recipes and handleDelete props received from App
import RecipeCard from "./RecipeCard"


function RecipeList({ recipes, handleDelete }) {


  return (
    <div  id="eachCardOnList">
       {recipes.map((eachRecipe, index) => (
        <div key={index}>
          <RecipeCard eachRecipe={eachRecipe} handleDelete={handleDelete} index={index} />

         </div>
        ))}
    </div>
  )
}

export default RecipeList