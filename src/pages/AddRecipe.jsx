import { useState } from "react"

function AddRecipe({ onAddRecipe }) {

  const [newAddedRecipe, setNewAddedRecipe] = useState({
    name: '',
    cookingTimeMinutes: 0,
    servings: 0,
    difficulty: '',
    cuisine: '',
    caloriesPerServing: 0,
    image: '',
    rating: 0,
    mealType: '',
    liked: false,
    tags: [],
    ingredients: [],
    instructions: []
  })

  const handlerUnique = (e) => {
    const { name, type, value, checked } = e.target
    
    setNewAddedRecipe((currentState) => ({
      // superficial clone from the currentState to create a new version including the input changes
      ...currentState,
      // checks values as well as checkboxes
      [name]: type === 'checkbox' ? checked : value
      }))
  }

  const handleTagChange = (e) => {
    const { name, checked } = e.target;
    setNewAddedRecipe((prev) => ({
      ...prev,
      tags: checked ? [...prev.tags, name] : prev.tags.filter((tag) => tag !== name)
    }))
  }
  
  /* --> need to review this in the future if adding different handlers <--

  const handleMealTypeChange = (e) => {
    const { name, checked } = e.target;
    // Si está marcado, lo añadimos al array
    if (checked) {
      setMealType((prevMealType) => [...prevMealType, name]);
    } 
    // Si no está marcado, lo eliminamos del array
    else {
      setMealType((prevMealType) => prevMealType.filter((mealType) => mealType !== name));
    }
  }

  const handlerIngredients = (e) => setIngredients(event.target.value);
  const handlerInstructions = (e) => setInstructions(event.target.value)
  */

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('new recipe to add', newAddedRecipe)

    onAddRecipe(newAddedRecipe)

    // restarts form aka form clean after submit
    setNewAddedRecipe({
      name: '',
      cookingTimeMinutes: 0,
      servings: 0,
      difficulty: '',
      cuisine: '',
      caloriesPerServing: 0,
      image: '',
      rating: 0,
      mealType: '',
      liked: false,
      tags: [],
      ingredients: [], // check empty array depending on final type
      instructions: [] // check empty array depending on final type
    })
  }



  return (
    <div className="new-recipe-form">

      <form onSubmit={handleSubmit}>

        <span>Add a Recipe</span>
        <div>
          <label>
            Name
            <input name="name" type="text" placeholder="Grandma's secret cookie recipe" onChange={handlerUnique} value={newAddedRecipe.name} />
          </label>


{/* changed to handler unique for testing; added textaera provisonally */}
        <label>{/*Revisar lista dinámica - clase 20/09*/}
          Ingredients
          <textarea name="ingredients" rows="5" placeholder="Potatoe" onChange={handlerUnique} value={newAddedRecipe.ingredients} />
          {/* <input name="quantity" type="text" placeholder="100gr"  value={quantity} /> */}
        </label>

        <label>{/*Revisar lista dinámica - clase 20/09 - hacerlo de tal manera que sea como añadir elementos a una lista*/}
          Instructions
          <textarea name="instructions" rows="5" placeholder="Mix all dry ingredients..." onChange={handlerUnique} value={newAddedRecipe.instructions} />
        </label>
{/* changed to handler unique for testing */}


        <label>
          Cooking time -minutes-
          <input name="cookingTimeMinutes" type="number" placeholder="30" onChange={handlerUnique} value={newAddedRecipe.cookingTimeMinutes} />
        </label>

        <label>
          Servings
          <input name="servings" type="number" placeholder="4" onChange={handlerUnique} value={newAddedRecipe.servings} />
        </label>

        <label>
          Difficulty
          <select name="difficulty" onChange={handlerUnique} value={newAddedRecipe.difficulty} >
              <option value="">-- None --</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Difficult">Difficult</option>
            </select>
        </label>

        <label>
          Cuisine
          <input name="cuisine" type="text" placeholder="Homemade" onChange={handlerUnique} value={newAddedRecipe.cuisine} />
        </label>

        <label>
          Calories
          <input name="caloriesPerServing" type="text" placeholder="250" onChange={handlerUnique} value={newAddedRecipe.caloriesPerServing} />
        </label>

  {/* TAGS START HERE */}
        <label>
            Vegan
            <input
              name="Vegan"
              type="checkbox"
              checked={newAddedRecipe.tags.includes("Vegan")}
              onChange={handleTagChange}
            />
          </label>

          <label>
            Lactose Free
            <input
              name="Lactose Free"
              type="checkbox"
              checked={newAddedRecipe.tags.includes("Lactose Free")}
              onChange={handleTagChange}
            />
          </label>

          <label>
            Gluten Free
            <input
              name="Gluten Free"
              type="checkbox"
              checked={newAddedRecipe.tags.includes("Gluten Free")}
              onChange={handleTagChange}
            />
          </label>
  {/* TAGS START HERE */}

          <label>
            Picture
            <input name="image" type="text" placeholder="Place your picture link here!" onChange={handlerUnique} value={newAddedRecipe.image} />
          </label>

          <label>
            Rating
            <select name="rating" onChange={handlerUnique} value={newAddedRecipe.rating} >
                <option value="">-- None --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
          </label>

          <label>
            Did you liked it?
            <input name="liked" type="checkbox" onChange={handlerUnique} value={newAddedRecipe.liked} />
          </label>

          <label>
            Meal Type
            <select name="mealType" onChange={handlerUnique} value={newAddedRecipe.mealType} >
                <option value="">-- None --</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
                <option value="Dessert">Dessert</option>
              </select>
          </label>
        </div>

        <button type="submit">Add Recipe</button>
        
      </form>
    </div>
  )
}

export default AddRecipe

