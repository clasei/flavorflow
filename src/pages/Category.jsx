import { useParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

function Category({ recipes, handleDelete }) {
  const { mealType } = useParams();

  const filteredRecipes = recipes.filter(
    (eachRecipe) => eachRecipe.mealType === mealType
  );

  if (filteredRecipes.length === 0) {
    return <div>No recipes found for the category "{mealType}"</div>;
  }

  return (
    <div className="mainContainer">
      <div className="mainBar">
        <p>{mealType}</p>
      </div>

      <div id="eachCardOnList">
        {filteredRecipes.map((eachRecipe, index) => (
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

export default Category;
