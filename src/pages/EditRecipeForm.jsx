import { useState } from "react"
import { useParams, useNavigate  } from "react-router-dom"


import veganImg from "../assets/icons/vegan.svg";
import lactoseImg from "../assets/icons/lactose.svg";
import glutenImg from "../assets/icons/gluten.svg";
import nutImg from "../assets/icons/nut.png";

function EditRecipeForm({ recipes, onEditRecipe }) {

  const { recipeId } = useParams()
  
  const recipeToEdit = recipes.find(eachRecipe => eachRecipe.id == recipeId)
  
  const [editRecipe, setEditRecipe] = useState(
    {
    
      ...recipeToEdit
  });
  
  const navigate = useNavigate();
  const handlerUnique = (e) => {
    const { name, type, value, checked } = e.target;
    setEditRecipe((currentState) => ({

      ...currentState,

      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTagChange = (e) => {
    const { name, checked } = e.target;
    setEditRecipe((prev) => ({
      ...prev,
      tags: checked
        ? [...prev.tags, name]
        : prev.tags.filter((tag) => tag !== name),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onEditRecipe(editRecipe);
    navigate("/");
  };
 
  
  return (
    <div className="mainContainer">
      <div className="mainBar">
        <p>New Recipe</p>
        
      </div>
      <div className="new-recipe-form">
        <h4>Update a Recipe</h4>
        <p className="note">(*) Required fields</p>

        <form onSubmit={handleSubmit}>

          <label className="largeLabel">
            Name *
            <input
              name="name"
              type="text"
              onChange={handlerUnique}
              value={editRecipe.name}
              required
            />
          </label>

          <label className="largeLabel">
            Ingredients *
            <textarea
              name="ingredients"
              rows="5"
              onChange={handlerUnique}
              value={editRecipe.ingredients}
              required
            ></textarea>
          </label>

          <label className="largeLabel">
            Instructions *
            <textarea
              name="instructions"
              rows="5"
              onChange={handlerUnique}
              value={editRecipe.instructions}
              required
            ></textarea>
          </label>

          <label className="largeLabel">
            Meal Type
            <select name="mealType" onChange={handlerUnique} value={editRecipe.mealType} >
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
              onChange={handlerUnique}
              value={editRecipe.cookingTimeMinutes}
            />
          </label>

          <label className="smallLabel">
            Servings
            <input
              name="servings"
              type="number"
              onChange={handlerUnique}
              value={editRecipe.servings}
            />
          </label>

          <label className="smallLabel">
            Difficulty
            <select
              name="difficulty"
              onChange={handlerUnique}
              value={editRecipe.difficulty}
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
              onChange={handlerUnique}
              value={editRecipe.cuisine}
            />
          </label>

          <label className="smallLabel">
            Calories
            <input
              name="caloriesPerServing"
              type="text"
              onChange={handlerUnique}
              value={editRecipe.caloriesPerServing}
            />
          </label>

          <label className="smallLabel">
            Rating
            <select
              name="rating"
              onChange={handlerUnique}
              value={editRecipe.rating}
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
                checked={editRecipe.tags.includes("Vegan")}
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
                checked={editRecipe.tags.includes("Lactose Free")}
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
                checked={editRecipe.tags.includes("Gluten Free")}
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
                checked={editRecipe.tags.includes("Nut Free")}
                onChange={handleTagChange}
              />
            </label>
          </div>

          <label className="largeLabel">
            Picture
            <input
              name="image"
              type="text"
              onChange={handlerUnique}
              value={editRecipe.image}
            />
          </label>
         
         
          
            
          <button type="submit">Update Recipe</button>

        </form>
      </div>
    </div>
  )
}

export default EditRecipeForm