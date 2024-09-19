import { useState } from "react"
import Recipes from "../data/recipes.json"
import thumbUp from "../assets/icons/thumb_up.svg"
import thumbDown from "../assets/icons/thumb_down.svg"

function RecipeCard(props) {
  console.log(props.handleDelete)
 {/*Tener en cuenta el traer sólo las propiedades que necesitamos  -en lugar de pasarle como parámetro props-*/}
  return (
    <div>
       
       <div key={props.id}>
        <img className="recipeImg" src={props.eachRecipe.image} alt="" />
        <p>{props.eachRecipe.name}</p>

        <p>Did you liked it? {props.eachRecipe.liked ? (<img src={thumbUp}/>) : (<img src ={thumbDown}/>)}</p>

        <button onClick={() => props.handleDelete(props.index)} style={{backgroundColor:"darkred"}}>Borrar</button>
       </div>
       
    </div>

  )
}

export default RecipeCard