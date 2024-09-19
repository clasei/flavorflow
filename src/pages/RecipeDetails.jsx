import { useParams } from "react-router-dom"
import Recipes from "../data/recipes.json" 

function RecipeDetails() {
  
  const param = useParams()
  
  const recipeToDisplay = Recipes.find((eachRecipe) =>{
    return eachRecipe.name === param.recipeName
  })


  {/* function UserData() {

      const parametrosDinamicos = useParams()
      
      const userToDisplay = allStudent.find((eachStudent) => {
        return eachStudent.username === parametrosDinamicos.nombreDeUsuario
      {) */}


  
  return (
    <div>
      <h1>{recipeToDisplay.name}</h1>
    </div>
  )
}

export default RecipeDetails