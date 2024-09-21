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

function RecipeCard(props) {
  const [liked, setLiked] = useState(props.eachRecipe.liked);
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

  console.log("Rating recibido:", props.eachRecipe.rating);
  {
    /*Tener en cuenta el traer sólo las propiedades que necesitamos  -en lugar de pasarle como parámetro props-*/
  }
  return (
    <div>
      <div className="card" key={props.eachRecipe.id}>
        <section className="cardImg">
          <img
            className="recipeImg"
            src={props.eachRecipe.image}
            alt={props.eachRecipe.name}
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
              {getRating(props.eachRecipe.rating)}{" "}
            </div>
          </div>
        </section>

        <section className="cardHeader">
          <Link
            className="recipeLink"
            to={`/recipes/${props.eachRecipe.name}`}
            element={<RecipeDetails />}
          >
            <h4>{props.eachRecipe.name}</h4>
          </Link>
          <p>{props.eachRecipe.instructions[0].slice(0, 40)}..</p>
        </section>

        <section className="cardResume">
          <div className="iconProperty">
            <img src={timeImg} alt="time" />
            <p>{props.eachRecipe.cookingTimeMinutes} min</p>
          </div>
          <span>|</span>
          <div className="iconProperty">
            <img src={difficultyImg} alt="difficulty" />
            <p>{props.eachRecipe.difficulty}</p>
          </div>
          <span>|</span>
          <div className="iconProperty">
            <img src={servingsImg} alt="servings" />
            <p>{props.eachRecipe.servings} servings</p>
          </div>
          <span>|</span>
          <div className="iconProperty">
            <img src={caloriesImg} alt="calories" />
            <p>{props.eachRecipe.caloriesPerServing} cal.</p>
          </div>
        </section>

        <section className="cardSimpleTags">
          <p>{props.eachRecipe.mealType}</p>
          {/*aquí si hay varias debería mostrarlas*/}
          <p>{props.eachRecipe.cuisine}</p>
        </section>

        <section className="cardTags">
          {props.eachRecipe.tags.map((tag, index) => (
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
            onClick={() => props.handleDelete(props.index)}
          >
            <img title="delete" src={deleteImg} alt="delete" />
          </button>
          <img title="edit" id="edit" src={editImg} alt="" />
        </div>

          
          <Link
            className="openBtn"
            to={`/recipes/${props.eachRecipe.name}`}
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
