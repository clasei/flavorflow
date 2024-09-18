import Recipes from "../data/recipes.json"

function RecipeCard() {
  return (
    <div>
       {Recipes.map((eachRecipe)=>
      (
       <div key={eachRecipe.id}>
        <p>{eachRecipe.name}</p>
       </div>
      ))}
    </div>

  )
}

export default RecipeCard