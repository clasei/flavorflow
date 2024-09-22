import { useParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

function Category({ recipes, handleDelete }) {
  //   const { recipeMealType } = useParams()
  //   const recipeToDisplay = recipes.find(eachRecipe => eachRecipe.mealType === recipeMealType)
  // //recipe o recipes??

  // gets the mealType from URL with useParams and matching the url set in App.jsx == /Recipes/:mealType
  const { mealType } = useParams();

  // .filter automatically iterates through the recipes array accesing all different recipes aka eachRecipe
  // eachRecipe name is given here for more clarity
  const filteredRecipes = recipes.filter(
    (eachRecipe) => eachRecipe.mealType === mealType
  );

  // handles cases in which no recipes are found in the specified category
  // filteredRecipes.length checks if the array returned (recipes matching category) is empty
  if (filteredRecipes.length === 0) {
    return <div>No recipes found for the category "{mealType}"</div>;
  }

  return (
    <div className="mainContainer">
      <div className="mainBar">
        <p>{mealType}</p>
      </div>

      <div id="eachCardOnList">
        {/* .map used here to access each recipe after recipes (combined all recipes) received as prop from App.jsx */}
        {filteredRecipes.map((eachRecipe, index) => (
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

export default Category;
