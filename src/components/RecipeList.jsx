import { useState } from "react"
import RecipeCard from "./RecipeCard"
import Recipes from "../data/recipes.json"
import {Routes, Route, Link} from "react-router-dom"
import RecipeDetails from "../pages/RecipeDetails.jsx"

function RecipeList() {

  const [ recipesArr, setRecipes ] = useState(Recipes)

  const handleDelete = (index) => {
    console.log("removiendo elemento", index)
    const clone = recipesArr.slice(0)
    clone.splice(index, 1)
    setRecipes(clone)
  }

{/*hay que añadir el estado en App.jsx*/}

  return (
    <>
       {recipesArr.map((eachRecipe, index)=>
      (
        <li>
          <RecipeCard eachRecipe={eachRecipe} handleDelete = {handleDelete} index={index}/>

          <Link to={`/recipes/${eachRecipe.name}`} element={< RecipeDetails />}>{eachRecipe.name}</Link>
         </li>
        ))}
    </>
  )
}

export default RecipeList