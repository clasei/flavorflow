import { useState } from "react"
import RecipeCard from "./RecipeCard"
import Recipes from "../data/recipes.json"


function RecipeList() {

  const [ recipesArr, setRecipes ] = useState(Recipes)

  const handleDelete = (index) => {
    console.log("removiendo elemento", index)
    const clone = recipesArr.slice(0)
    clone.splice(index, 1)
    setRecipes(clone)
  }

  return (
    <>
       {recipesArr.map((eachRecipe, index)=>
      (
        <div>
          <RecipeCard name={eachRecipe} handleDelete = {handleDelete} index={index}/>
         </div>
        ))}
    </>
  )
}

export default RecipeList