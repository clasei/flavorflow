import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, allFavorites, setAllFavorites, handleDelete }) {
  return (
    <div id="eachCardOnList">
      {recipes.map((eachRecipe, index) => (
        <div key={index}>
          <RecipeCard
            eachRecipe={eachRecipe}
            allFavorites={allFavorites}
            setAllFavorites={setAllFavorites}
            handleDelete={handleDelete}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
