import { useState } from "react"
import {Link} from "react-router-dom"
import Recipes from "../data/recipes.json"
import thumbUp from "../assets/icons/thumb_up.svg"
import thumbDown from "../assets/icons/thumb_down.svg"
import RecipeDetails from "../pages/RecipeDetails.jsx"
import veganImg from "../assets/icons/vegan.svg";
import lactoseImg from "../assets/icons/lactose.svg";
import glutenImg from "../assets/icons/gluten.svg";


function RecipeCard(props) {

  const getIcon = (tag) => {
    switch(tag) {
      case "Vegan":
        return <img src={veganImg} alt="Vegan" style={{ width: '20px', height: '20px' }} />;
      case "Gluten-Free":
        return <img src={glutenImg} alt="Gluten-Free" style={{ width: '20px', height: '20px' }} />;
      case "Lactose-Free":
        return <img src={lactoseImg} alt="Lactose-Free" style={{ width: '20px', height: '20px' }} />;
      default:
        return null;
    }
  };

  
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
          {props.eachRecipe.tags.map((tag, index) => (
            <span key={index} className="tag">
              {getIcon(tag)}
              {tag} 
             </span>
           ))}
        </section>

        <p>Did you liked it? {props.eachRecipe.liked ? (<img src={thumbUp}/>) : (<img src ={thumbDown}/>)}</p>

        <button onClick={() => props.handleDelete(props.index)} style={{backgroundColor:"darkred"}}>Borrar</button>

       </div>
       
    </div>

  )
}

export default RecipeCard