import { useState } from "react"

function AddRecipe() {

  const [newAddedRecipe, setNewRecipe] = useState({})

  newAddedRecipe = {
    name: name,
    cookingTimeMinutes: cookingTimeMinutes,
    servings: servings,
    difficulty: difficulty,
    cuisine: cuisine,
    caloriesPerServing: caloriesPerServing,
    image: image,
    rating: rating,
    liked: liked,
  }

  /* const [name, setName] = useState("")
  const [cookingTimeMinutes, setCookingTimeMinutes] = useState(0)
  const [servings, setServings] = useState(0)
  const [difficulty, setDifficulty] = useState("")
  const [cuisine, setCuisine] = useState("")
  const [caloriesPerServing, setCaloriesPerServing] = useState(0)
  const [image, setImage] = useState("") // url here?
  const [rating, setRating] = useState(0)
  const [liked, setLiked] = useState(false) */

  const [ingredients, setIngredients] = useState("")
  const [instructions, setInstructions] = useState("")


  const [tags, setTags] = useState(false) // checkbox
  const [mealType, setMealType] = useState("") // checkbox


  const handlerUnique = (e) => {
    const property = e.target.name
    const value = e.target.value

    const modifiedObject = {...newRecipe}
    modifiedObject[property] = value
    setNewRecipe(modifiedObject)
  }

  const handleTagChange = (e) => {
    const { name, checked } = e.target;
    // Si está marcado, lo añadimos al array
    if (checked) {
      setTags((prevTags) => [...prevTags, name]);
    } 
    // Si no está marcado, lo eliminamos del array
    else {
      setTags((prevTags) => prevTags.filter((tag) => tag !== name));
    }
  };
  
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
  };

  const handlerIngredients = (e) => setIngredients(event.target.value);

  const handlerInstructions = (e) => setInstructions(event.target.value)


  return (
    <div>
      <h1>Hola en añadir receta</h1>
    <form>
      <span>Add a Recipe</span>
      <div>
        <label>
          Name
          <input name="name" type="text" placeholder="Grandma's secret cookie recipe" onChange={handlerUnique} value={name} />
        </label>

        <label>{/*Revisar lista dinámica - clase 20/09*/}
          Ingredients
          <input name="ingredients" type="text" placeholder="Potatoe" onChange={handlerIngredients} value={ingredients} />
          {/* <input name="quantity" type="text" placeholder="100gr"  value={quantity} /> */}
        </label>

        <label>{/*Revisar lista dinámica - clase 20/09 - hacerlo de tal manera que sea como añadir elementos a una lista*/}
          Instructions
          <input name="instructions" type="text" placeholder="Mix all dry ingredients..." onChange={handlerInstructions} value={instructions} />
        </label>

        <label>
          Cooking time -minutes-
          <input name="cooking-time" type="number" placeholder="30" onChange={handlerUnique} value={cookingTimeMinutes} />
        </label>

        <label>
          Servings
          <input name="servings" type="number" placeholder="4" onChange={handlerUnique} value={servings} />
        </label>

        <label>
          Difficulty
          <select name="difficulty" onChange={handlerUnique} value={difficulty} >
              <option value="">-- None --</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Difficult">Difficult</option>
            </select>
        </label>

        <label>
          Cuisine
          <input name="cuisine" type="text" placeholder="Homemade" onChange={handlerUnique} value={cuisine} />
        </label>

        <label>
          Calories
          <input name="calories" type="text" placeholder="250" onChange={handlerUnique} value={caloriesPerServing} />
        </label>

        <label>
            Vegan
            <input
              name="Vegan"
              type="checkbox"
              checked={tags.includes("Vegan")}
              onChange={handleTagChange}
            />
          </label>

          <label>
            Lactose Free
            <input
              name="Lactose Free"
              type="checkbox"
              checked={tags.includes("Lactose Free")}
              onChange={handleTagChange}
            />
          </label>

          <label>
            Gluten Free
            <input
              name="Gluten Free"
              type="checkbox"
              checked={tags.includes("Gluten Free")}
              onChange={handleTagChange}
            />
          </label>

        <label>
          Picture
          <input name="image" type="text" placeholder="Place your picture link here!" onChange={handlerUnique} value={image} />
        </label>

        <label>
          Rating
          <select name="rating" onChange={handlerUnique} value={rating} >
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
          <input name="image" type="text" placeholder="Place your picture link here!" onChange={handlerUnique} value={image} />
        </label>

        <label>
          Meal Type
          <select name="meal-type" value={mealType} >
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
    </div>
  )
}

export default AddRecipe

