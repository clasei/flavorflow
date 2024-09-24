import { Link } from "react-router-dom";
import { useState } from "react";
import RecipeList from "../components/RecipeList.jsx";
import addImg from "../assets/icons/add.svg";

function Dashboard({ recipes, allFavorites, setAllFavorites, handleDelete }) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchedRecipes = searchTerm
    ? recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : recipes;

  return (
    <div className="mainContainer">
      <div className="mainBar">
        <p>Home</p>

        <input
          type="text"
          placeholder="Search for a recipe..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <main id="containerRecipes">
        <RecipeList
          recipes={searchedRecipes}
          allFavorites={allFavorites}
          setAllFavorites={setAllFavorites}
          handleDelete={handleDelete}
        />
      </main>

      <Link id="buttonDashboard" to="/AddRecipe">
        <img id="buttonLargeAddImg" src={addImg} alt="Add Recipe" />
        <p>Add recipe</p>
      </Link>
    </div>
  );
}

export default Dashboard;
