// import { useParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

function Favorites({ recipes, allFavorites, setAllFavorites, handleDelete }) {

  // not sure if useParams will be needed !!!
  // const { mealType } = useParams();

  console.log(allFavorites)


  const favoritedRecipes = recipes.filter(
    (eachRecipe) => eachRecipe.favorite === true
  );

  // console.log(favoritedRecipes)

  if (allFavorites.length === 0) {
    return <div>No favorited recipes yet!</div>;
  }


  return (
    <div className="mainContainer">
      <div className="mainBar">
        <p>Favorites</p>
      </div>

      <div id="eachCardOnList">
        {/* .map used here to access each recipe after recipes (combined all recipes) received as prop from App.jsx */}
        {allFavorites.map((eachRecipe, index) => (
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