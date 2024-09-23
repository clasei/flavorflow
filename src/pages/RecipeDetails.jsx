import { useParams, Link } from "react-router-dom";

import veganImg from "../assets/icons/vegan.svg";
import lactoseImg from "../assets/icons/lactose.svg";
import glutenImg from "../assets/icons/gluten.svg";
import nutImg from "../assets/icons/nut.png";

import timeImg from "../assets/icons/time.svg";
import difficultyImg from "../assets/icons/difficulty.svg";
import servingsImg from "../assets/icons/servings.svg";
import caloriesImg from "../assets/icons/calories.svg";
import deleteImg from "../assets/icons/delete.svg";
import editImg from "../assets/icons/edit.svg";

import star0Img from "../assets/icons/star0.svg";
import star1Img from "../assets/icons/star1.svg";

function RecipeDetails({ recipes, handleDelete }) {
  const { recipeName } = useParams();
  const recipeToDisplay = recipes.find(eachRecipe => eachRecipe.name === recipeName);

  // Manejo del caso en que el nombre de la receta no se encuentra
  if (!recipeToDisplay) {
    return <div>Recipe details - No recipe found with the name "{recipeName}"</div>;
  }

  const getIcon = (tag) => {
    switch (tag) {
      case "Vegan":
        return <img src={veganImg} alt="Vegan" />;
      case "Gluten-Free":
        return <img src={glutenImg} alt="Gluten-Free" />;
      case "Lactose-Free":
        return <img src={lactoseImg} alt="Lactose-Free" />;
      case "Nut-Free":
        return <img src={nutImg} alt="Nut-Free" />;
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

  return (
    <div className="mainContainer">
      <div className="mainBar">
        <p>Recipe Details</p>
      </div>

      <div className="recipeComplete" key={recipeToDisplay.id}>
        <section className="recipeLeftSide">
          <div>
            <img className="recipeImgDetail" src={recipeToDisplay.image} alt={recipeToDisplay.name} />
          </div>

          {/* Si vas a agregar aquí el rating, like o favorite, descomentar */}
          {/* <div>
            <div onClick={handleFavorite}>
              <img title="favorite" src={favorited ? heart1Img : heart0Img} alt="Favorite" />
            </div>
            <div onClick={handleLike}>
              <img title="like" src={liked ? thumbsUp1Img : thumbsUp0Img} alt="Like" />
            </div>
            <div className="rating">
              {getRating(recipeToDisplay.rating)}{" "}
            </div>
          </div> */}
        </section>

        <section className="recipeRightSide">
          <div className="recipeDetailsHead">
            <h1>{recipeToDisplay.name}</h1>
          
          </div>
          <hr />
          <section className="recipeDetailscardResume">
            <div className="iconProperty">
              <img src={timeImg} alt="time" />
              <p>{recipeToDisplay.cookingTimeMinutes} min</p>
            </div>
            <span>|</span>
            <div className="iconProperty">
              <img src={difficultyImg} alt="difficulty" />
              <p>{recipeToDisplay.difficulty}</p>
            </div>
            <span>|</span>
            <div className="iconProperty">
              <img src={servingsImg} alt="servings" />
              <p>{recipeToDisplay.servings} servings</p>
            </div>
            <span>|</span>
            <div className="iconProperty">
              <img src={caloriesImg} alt="calories" />
              <p>{recipeToDisplay.caloriesPerServing} cal.</p>
            </div>
          </section>

          <div   className="recipeDetailsText">
            <h2>Ingredients</h2>
            <p>{recipeToDisplay.ingredients}</p>
          </div>

          <div className="recipeDetailsText">
            <h2>Instructions</h2>
            <p>{recipeToDisplay.instructions}</p>
          </div>

            <section className="allDetailsTag">
            <div className="recipeDetailsSimpleTags">
            <p>{recipeToDisplay.mealType}</p>
            <p>{recipeToDisplay.cuisine}</p>
          </div>

          <div className="recipeDetailsTags">
            {recipeToDisplay.tags.map((tag, index) => (
              <div key={index} className="detailsTag">
                {getIcon(tag)}
                {tag}
              </div>
            ))}
          </div>
            </section>

          <hr/>
          <section className="detailsLeftActions">
            
            
              <button className="deleteBtn" onClick={() => handleDelete(recipes.indexOf(recipeToDisplay))}>
                {/* Usa el index del recipeToDisplay dentro de recipes */}
                <img title="delete" src={deleteImg} alt="delete" />
              </button>

              {/* gets recipeToDisplay.id for the redirection */}
              <Link to={`/Recipes/Edit/${recipeToDisplay.id}`}>
                <img title="edit" id="detailsEdit" src={editImg} alt="edit" />
              </Link>
           
          </section>
        </section>
      </div>
    </div>
  );
}

export default RecipeDetails;
