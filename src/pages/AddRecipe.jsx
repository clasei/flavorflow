import { useState } from "react";
import { useNavigate } from "react-router-dom";

import veganImg from "../assets/icons/vegan.svg";
import lactoseImg from "../assets/icons/lactose.svg";
import glutenImg from "../assets/icons/gluten.svg";
import nutImg from "../assets/icons/nut.png";

function AddRecipe({ onAddRecipe }) {
  const [newAddedRecipe, setNewAddedRecipe] = useState({
    name: "",
    cookingTimeMinutes: 0,
    servings: 0,
    difficulty: "",
    cuisine: "",
    caloriesPerServing: 0,
    image: "",
    rating: 0,
    mealType: "",
    liked: false,
    tags: [],
    ingredients: "",
    instructions: "",
  });

  const navigate = useNavigate();
  const handlerUnique = (e) => {
    const { name, type, value, checked } = e.target;

    setNewAddedRecipe((currentState) => ({
      ...currentState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTagChange = (e) => {
    const { name, checked } = e.target;
    setNewAddedRecipe((prev) => ({
      ...prev,
      tags: checked
        ? [...prev.tags, name]
        : prev.tags.filter((tag) => tag !== name),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddRecipe(newAddedRecipe);

    setNewAddedRecipe({
      name: "",
      cookingTimeMinutes: 0,
      servings: 0,
      difficulty: "",
      cuisine: "",
      caloriesPerServing: 0,
      image: "",
      rating: 0,
      mealType: "",
      liked: false,
      tags: [],
      ingredients: [],
      instructions: [],
    });
    navigate("/");
  };

  return (
    <div className="mainContainer">
      <div className="mainBar">
        <p>New Recipe</p>
      </div>
      <div className="new-recipe-form">
        <h4>Add a Recipe</h4>
        <p className="note">(*) Required fields</p>
        <form onSubmit={handleSubmit}>
          <label className="largeLabel">
            Name *
            <input
              name="name"
              type="text"
              placeholder="Grandma's secret cookie recipe"
              onChange={handlerUnique}
              value={newAddedRecipe.name}
              required
            />
          </label>

          <label className="largeLabel">
            Ingredients *
            <textarea
              name="ingredients"
              rows="5"
              placeholder="Potato"
              onChange={handlerUnique}
              value={newAddedRecipe.ingredients}
              required
            ></textarea>
          </label>

          <label className="largeLabel">
            Instructions *
            <textarea
              name="instructions"
              rows="5"
              placeholder="Mix all dry ingredients..."
              onChange={handlerUnique}
              value={newAddedRecipe.instructions}
              required
            ></textarea>
          </label>

          <label className="largeLabel">
            Meal Type
            <select
              name="mealType"
              onChange={handlerUnique}
              value={newAddedRecipe.mealType}
            >
              <option value="">-- None --</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
              <option value="Dessert">Dessert</option>
            </select>
          </label>

          <label className="smallLabel">
            Cooking time -minutes-
            <input
              name="cookingTimeMinutes"
              type="number"
              placeholder="30"
              onChange={handlerUnique}
              value={newAddedRecipe.cookingTimeMinutes}
            />
          </label>

          <label className="smallLabel">
            Servings
            <input
              name="servings"
              type="number"
              placeholder="4"
              onChange={handlerUnique}
              value={newAddedRecipe.servings}
            />
          </label>

          <label className="smallLabel">
            Difficulty
            <select
              name="difficulty"
              onChange={handlerUnique}
              value={newAddedRecipe.difficulty}
            >
              <option value="">-- None --</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Difficult">Difficult</option>
            </select>
          </label>

          <label className="smallLabel">
            Cuisine
            <input
              name="cuisine"
              type="text"
              placeholder="Homemade"
              onChange={handlerUnique}
              value={newAddedRecipe.cuisine}
            />
          </label>

          <label className="smallLabel">
            Calories
            <input
              name="caloriesPerServing"
              type="text"
              placeholder="250"
              onChange={handlerUnique}
              value={newAddedRecipe.caloriesPerServing}
            />
          </label>

          <label className="smallLabel">
            Rating
            <select
              name="rating"
              onChange={handlerUnique}
              value={newAddedRecipe.rating}
            >
              <option value="">-- None --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>

          <div className="checkLabel">
            <label>
              <div className="iconLabel">
                <img src={veganImg} alt="" />
                Vegan
              </div>
              <input
                name="Vegan"
                type="checkbox"
                checked={newAddedRecipe.tags.includes("Vegan")}
                onChange={handleTagChange}
              />
            </label>

            <label>
              <div className="iconLabel">
                <img src={lactoseImg} alt="" />
                Lactose Free
              </div>

              <input
                name="Lactose Free"
                type="checkbox"
                checked={newAddedRecipe.tags.includes("Lactose Free")}
                onChange={handleTagChange}
              />
            </label>

            <label>
              <div className="iconLabel">
                <img src={glutenImg} alt="" />
                Gluten Free
              </div>
              <input
                name="Gluten Free"
                type="checkbox"
                checked={newAddedRecipe.tags.includes("Gluten Free")}
                onChange={handleTagChange}
              />
            </label>

            <label>
              <div className="iconLabel">
                <img src={nutImg} alt="" />
                Nut Free
              </div>
              <input
                name="Nut Free"
                type="checkbox"
                checked={newAddedRecipe.tags.includes("Nut Free")}
                onChange={handleTagChange}
              />
            </label>
          </div>

          <label className="largeLabel">
            Picture
            <input
              name="image"
              type="text"
              placeholder="Place your picture link here!"
              onChange={handlerUnique}
              value={newAddedRecipe.image}
            />
          </label>

          <button type="submit">Add Recipe</button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipe;
