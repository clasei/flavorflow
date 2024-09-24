// import { useParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

function Favorites({ recipes, handleDelete }) {

  // not sure if useParams will be needed !!!
  // const { mealType } = useParams();

  const favoritedRecipes = recipes.filter(
    (eachRecipe) => eachRecipe.favorite === true
  );

  console.log(favoritedRecipes)

  if (favoritedRecipes.length === 0) {
    return <div>No favorited recipes yet!</div>;
  }


  return (
    <div className="mainContainer">
      <div className="mainBar">
        <p>Favorites</p>
      </div>

      <div id="eachCardOnList">
        {/* .map used here to access each recipe after recipes (combined all recipes) received as prop from App.jsx */}
        {favoritedRecipes.map((eachRecipe, index) => (
          <div key={index}>
            {/* eachRecipe and handleDelete passed as props to RecipeCard */}
            <RecipeCard
              eachRecipe={eachRecipe}
              handleDelete={handleDelete}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;