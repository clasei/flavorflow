import RecipeCard from "../components/RecipeCard";

/* Pending to update on V2 */
function Favorites({ recipes, allFavorites, setAllFavorites, handleDelete }) {

  const favoritedRecipes = recipes.filter(
    (eachRecipe) => eachRecipe.favorite === true
  );

  if (allFavorites.length === 0) {
    return <div>No favorited recipes yet!</div>;
  }

  return (
    <div className="mainContainer">
      <div className="mainBar">
        <p>Favorites</p>
      </div>

      <div id="eachCardOnList">
        {allFavorites.map((eachRecipe, index) => (
          <div key={index}>
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
