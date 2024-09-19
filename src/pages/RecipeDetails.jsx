import { useParams } from "react-router-dom"
import Recipes from "../data/recipes.json" 

function RecipeDetails() {
  
  const param = useParams()
  
  const recipeToDisplay = Recipes.find((eachRecipe) =>{
    return eachRecipe.name === param.recipeName
  })

  
  return (
    <div>
      
      <h1>{recipeToDisplay.name}</h1>
      <p>{recipeToDisplay.ingredients}</p>
      <p>{recipeToDisplay.instructions}</p>
      <p>{recipeToDisplay.tags}</p>

    </div>
  )
}

export default RecipeDetails