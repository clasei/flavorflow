import { useParams } from "react-router-dom" 

function RecipeDetails({ recipes }) {
  
  // // shorter version on lines 11-12
  // const param = useParams()
  // const recipeToDisplay = Recipes.find((eachRecipe) =>{
  //   return eachRecipe.name === param.recipeName
  // })

  const { recipeName } = useParams()
  const recipeToDisplay = recipes.find(eachRecipe => eachRecipe.name === recipeName)

  // handles cases in which recipName is not found
  if (!recipeToDisplay) {
    return <div>Recipe details - No recipe found with the name "{recipeName}"</div>
  }

  
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