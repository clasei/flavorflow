import { useState } from "react"

function AddRecipe() {

  const [name, setName] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [instructions, setInstructions] = useState("")
  const [cookingTimeMinutes, setCookingTimeMinutes] = useState(0)
  const [servings, setServings] = useState(0)
  const [difficulty, setDifficulty] = useState("")
  const [cuisine, setCuisine] = useState("")
  const [caloriesPerServing, setCaloriesPerServing] = useState(0)
  const [tags, setTags] = useState(false)
  const [image, setImage] = useState("") // url here?
  const [rating, setRating] = useState(0)
  const [mealType, setMealType] = useState("")

  
  return (
    <form>
      <span>Add a Recipe</span>
      <div>
        <label>
          Name
          <input name="name" type="text" placeholder="Grandma's secret cookie recipe" onChange={} value={name} />
        </label>

        <label>{/*Revisar lista dinámica - clase 20/09*/}
          Ingredients
          <input name="ingredients" type="text" placeholder="Potatoe" onChange={} value={ingredients} />
          <input name="quantity" type="text" placeholder="100gr" onChange={}  value={quantity} />
        </label>

        <label>{/*Revisar lista dinámica - clase 20/09 - hacerlo de tal manera que sea como añadir elementos a una lista*/}
          Instructions
          <input name="instructions" type="text" placeholder="Mix all dry ingredients..." onChange={} value={instructions} />
        </label>

        <label>
          Cooking time -minutes-
          <input name="cooking-time" type="number" placeholder="30" onChange={} value={cookingTimeMinutes} />
        </label>

        <label>
          Servings
          <input name="servings" type="number" placeholder="4" onChange={} value={servings} />
        </label>

        <label>
          Difficulty
          <select onChange={} name="difficulty" value={difficulty} >
              <option value="">-- None --</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Difficult">Difficult</option>
            </select>
        </label>

        <label>
          Cuisine
          <input name="cuisine" type="text" placeholder="Homemade" onChange={} value={cuisine} />
        </label>

        <label>
          Calories
          <input name="calories" type="text" placeholder="250" onChange={} value={caloriesPerServing} />
        </label>

        <label>
          Tags
          <input name="tags" type="checkbox" onChange={} checked={tags} />
        </label>

        <label>
          Picture
          <input name="image" type="text" placeholder="Place your picture link here!" onChange={} value={image} />
        </label>

        <label>
          Rating
          <select onChange={} name="rating" value={rating} >
              <option value="">-- None --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
          </select>
        </label>

        <label>
          Meal Type
          <select onChange={} name="meal-type" value={mealType} >
              <option value="">-- None --</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
              <option value="Dessert">Dessert</option>
            </select>
        </label>

      </div>


      
    </form>
  )
}

export default AddRecipe

