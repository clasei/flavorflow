import Recipes from "../data/recipes.json"
import thumbUp from "../assets/icons/thumb_up.svg"
import thumbDown from "../assets/icons/thumb_down.svg"


function RecipeCard() {
  return (
    <div>
       {Recipes.map((eachRecipe)=>
      (
       <div key={eachRecipe.id}>
        <img className="recipeImg" src={eachRecipe.image} alt="" />
        <p>{eachRecipe.name}</p>

        <p>Did you liked it? {eachRecipe.liked ? (<img src={thumbUp}/>) : (<img src ={thumbDown}/>)}</p>
       </div>
      ))}
    </div>

  )
}

export default RecipeCard