import { useState } from "react";
import { Link } from "react-router-dom";
import Recipes from "../data/recipes.json";
import RecipeDetails from "../pages/RecipeDetails.jsx";

import veganImg from "../assets/icons/vegan.svg";
import lactoseImg from "../assets/icons/lactose.svg";
import glutenImg from "../assets/icons/gluten.svg";
import nutImg from "../assets/icons/nut.png";

import timeImg from "../assets/icons/time.svg";
import difficultyImg from "../assets/icons/difficulty.svg";
import servingsImg from "../assets/icons/servings.svg";
import caloriesImg from "../assets/icons/calories.svg";
import deleteImg from "../assets/icons/delete.svg";
import openImg from "../assets/icons/open.svg";

import star0Img from "../assets/icons/star0.svg";
import star1Img from "../assets/icons/star1.svg";
import thumbsUp0Img from "../assets/icons/thumbsUp0.svg";
import thumbsUp1Img from "../assets/icons/thumbsUp1.svg";
import heart0Img from "../assets/icons/heart0.svg";
import heart1Img from "../assets/icons/heart1.svg";
import editImg from "../assets/icons/edit.svg";

function RecipeCard({ eachRecipe, handleDelete, index }) {


  if (!eachRecipe) {
    console.error('no recipe data provided');
    return null // render stops if tehre's no data
  }
  

  const [liked, setLiked] = useState(eachRecipe.liked);
  const [favorited, setFavorited] = useState(false);

  const handleLike = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  const handleFavorite = () => {
    setFavorited((prevFavorited) => !prevFavorited);
  };

  const getIcon = (tag) => {
    switch (tag) {
      case "Vegan":
        return <img src={veganImg} alt="Vegan" />;
      case "Gluten-Free":
        return <img src={glutenImg} alt="Gluten-Free" />;
      case "Lactose-Free":
        return <img src={lactoseImg} alt="Lactose-Free" />;
      case "Nut-Free":
        return <img src={nutImg} alt="Lactose-Free" />;
      default:
        return null;
    }
  };

  const getRating = (rating) => {
    const maxStars = 5;
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
      if (i <= rating) {
        stars.push(<img key={i} src={star1Img} alt="full star" />);
      } else {
        stars.push(<img key={i} src={star0Img} alt="empty star" />);
      }
    }
    return <div className="star-rating">{stars}</div>;
  };

  // console.log("Rating recibido:", eachRecipe.rating);
  {
    /*Tener en cuenta el traer sólo las propiedades que necesitamos  -en lugar de pasarle como parámetro props-*/
  }
  return (
    <div>
      <div className="card" key={eachRecipe.id}>
        <section className="cardImg">
          <img
            className="recipeImg"
            src={eachRecipe.image}
            alt={eachRecipe.name}
          />

          <div className="topIcons">
            <div className="fav">
              <div onClick={handleFavorite}>
                <img title="favorite" src={favorited ? heart1Img : heart0Img} alt="Favorite" />
              </div>
              <div onClick={handleLike}>
                <img title="like" src={liked ? thumbsUp1Img : thumbsUp0Img} alt="Like" />
              </div>
            </div>
            <div className="rating">
              {getRating(eachRecipe.rating)}{" "}
            </div>
          </div>
        </section>

        <section className="cardHeader">
          <Link
            className="recipeLink"
            to={`/recipes/${eachRecipe.name}`}
            element={<RecipeDetails />}
          >
            <h4>{eachRecipe.name}</h4>
          </Link>
          <p>
  {eachRecipe.instructions && eachRecipe.instructions.length > 0
  ? typeof eachRecipe.instructions === 'string'
    ? eachRecipe.instructions.slice(0, 42) + "..." // for strings
    : eachRecipe.instructions.join(' ').slice(0, 42) + "..." // joins the array into strings
    : "No instructions available"}
</p>
        </section>

        <section className="cardResume">
          <div className="iconProperty">
            <img src={timeImg} alt="time" />
            <p>{eachRecipe.cookingTimeMinutes} min</p>
          </div>
          <span>|</span>
          <div className="iconProperty">
            <img src={difficultyImg} alt="difficulty" />
            <p>{eachRecipe.difficulty}</p>
          </div>
          <span>|</span>
          <div className="iconProperty">
            <img src={servingsImg} alt="servings" />
            <p>{eachRecipe.servings} servings</p>
          </div>
          <span>|</span>
          <div className="iconProperty">
            <img src={caloriesImg} alt="calories" />
            <p>{eachRecipe.caloriesPerServing} cal.</p>
          </div>
        </section>

        <section className="cardSimpleTags">
          <p>{eachRecipe.mealType}</p>
          {/*aquí si hay varias debería mostrarlas*/}
          <p>{eachRecipe.cuisine}</p>
        </section>

        <section className="cardTags">
          {eachRecipe.tags.map((tag, index) => (
            <div key={index} className="tag">
              {getIcon(tag)}
              {tag}
            </div>
          ))}
        </section>

        <hr />

        <section className="cardActions">
        <div className="leftActions">
          
        <button
            className="deleteBtn"
            onClick={() => handleDelete(index)}
          >
            <img title="delete" src={deleteImg} alt="delete" />
          </button>
          <Link to={`/Recipes/Edit/${eachRecipe.id}`}>
          <img title="edit" id="edit" src={editImg} alt="" />
          </Link>
        </div>

          
          <Link
            className="openBtn"
            to={`/recipes/${eachRecipe.name}`}
            element={<RecipeDetails />}
          >
            <img title="open" src={openImg} alt="open" />
          </Link>
        </section>
      </div>

      {/* <p>Did you liked it? {props.eachRecipe.liked ? (<img src={thumbUp}/>) : (<img src ={thumbDown}/>)}</p> */}
      {/* <hr style={{ width: "80%", display:"flex", Align:"center"}} /> */}
    </div>
  );
}

export default RecipeCard;
