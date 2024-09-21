import { useState } from "react"
import Recipes from "../data/recipes.json"
import thumbUp from "../assets/icons/thumb_up.svg"
import thumbDown from "../assets/icons/thumb_down.svg"
import RecipeDetails from "../pages/RecipeDetails.jsx"
import {Link} from "react-router-dom"

function RecipeCard(props) {
  console.log(props.handleDelete)
 {/*Tener en cuenta el traer sólo las propiedades que necesitamos  -en lugar de pasarle como parámetro props-*/}
  return (
    <div>
       <div className="card" key={props.id}>

        <section className="cardImg">
          <img className="recipeImg" src={props.eachRecipe.image} alt="" />
        </section>
        
        <section className="cardHeader">
          <Link to={`/recipes/${props.eachRecipe.name}`} element={< RecipeDetails />}>
            <h4>{props.eachRecipe.name}</h4>
          </Link>
          <p>{props.eachRecipe.instructions[0].slice(0,200)}..</p>
        </section>
        
        <section className="cardResume">
          <div className="iconProperty">
            <p>{props.eachRecipe.cookingTimeMinutes} min</p>
          </div>
          <div className="iconProperty">
            <p>{props.eachRecipe.difficulty}</p>
          </div>
          <div className="iconProperty">
            <p>{props.eachRecipe.servings} servings</p>
          </div>
          <div className="iconProperty">
            <p>{props.eachRecipe.caloriesPerServing} cal.</p>
          </div>
        </section>

        <div className="cardSimpleTags">
            <p>{props.eachRecipe.mealType}</p>{/*aquí si hay varias debería mostrarlas*/}
            <p>{props.eachRecipe.cuisine}</p>
        </div>

        <section className="cardTags">
        <p>{props.eachRecipe.tags}</p>{/*aquí debería msotrar varias pero cada una con su icno*/}
        </section>

        <p>Did you liked it? {props.eachRecipe.liked ? (<img src={thumbUp}/>) : (<img src ={thumbDown}/>)}</p>

        <button onClick={() => props.handleDelete(props.index)} style={{backgroundColor:"darkred"}}>Borrar</button>

       </div>
       
    </div>

  )
}

export default RecipeCard