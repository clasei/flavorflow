import { useState, useEffect } from "react"
import {Routes, Route} from "react-router-dom"
import './App.css'
import Sidebar from "./components/Sidebar.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import About from "./pages/About.jsx"
import NotFound from './pages/NotFound.jsx'
// import RecipeList from './components/RecipeList.jsx'
import RecipeDetails from './pages/RecipeDetails.jsx'
import AddRecipe from './pages/AddRecipe.jsx'
import Category from './pages/Category.jsx'
// .json added !!!
import RecipesFromJSON from "./data/recipes.json"
import EditRecipeForm from "./pages/EditRecipeForm.jsx"


function App() {

  // state and function added to manage state from App
  // combining .json + new recipes, without duplicating
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem('recipes')
    const parsedRecipes = savedRecipes ? JSON.parse(savedRecipes) : [] // empty array? teacher doubt?
    const combinedRecipes = [...RecipesFromJSON, ...parsedRecipes]
  
    return combinedRecipes
  })

  // localStorage added to add functionality to flavorflow
  // saves only the new recipes in localStorage, not the ones stored in recipes.json
  useEffect(() => {
    const newRecipes = recipes.filter(recipe => 
      !RecipesFromJSON.some(jsonRecipe => jsonRecipe.name === recipe.name))
      localStorage.setItem('recipes', JSON.stringify(newRecipes))
  }, [recipes])


  const addRecipe = (newRecipe) => {
    
    // adds a random ID between 1 and 1million to new added recipes to handle edit
    const newRecipeWithId = {
      ...newRecipe,
      id: Math.floor(Math.random() * 1000000) + 1
    }
    console.log('adding new recipe via App', newRecipeWithId)

    // setRecipes((currentStateRecipes) => [...currentStateRecipes, newRecipe]) // commmented to add newRecipe with ID
    // setter function (setRecipes) used to update recipes state; currentStateRecipes = current value of the recipes state
    // ...currentStateRecipes == spread operator creates a shallow clone and adds the new item (newRecipeWithId) to the array
    setRecipes((currentStateRecipes) => [...currentStateRecipes, newRecipeWithId]) 
  }

  // removes recipes by index (funcion 'imported' from RecipeList)
  const handleDelete = (index) => {
     const updatedRecipes = [...recipes]
     updatedRecipes.splice(index, 1)
     setRecipes(updatedRecipes)
  }

  const onEditRecipe = (editedRecipe) => {
    console.log('adding new recipe via App', onEditRecipe)
    // // next line commented for testing
    // setRecipes((currentStateRecipes) => [...currentStateRecipes, onEditRecipe]) 

    // map() loops through recipes in the currentStateRecipes; searches for the same id that edited recipe id
    // if the id matches, the recipes is updated with editedRecipe
    setRecipes((currentStateRecipes) => {
      return currentStateRecipes.map((recipe) => recipe.id === editedRecipe.id ? editedRecipe : recipe
      )
    })
  }

  return (
    <>
    <div id='appPage'>
    <div id='mainPage'>

        {/* testing, unfinished */}
        {/* <div>
          {recipes.map((eachRecipe, index) => (
            <div key={index}>
              <Sidebar eachRecipe={eachRecipe} recipes={recipes} />

            </div>
            ))}
        </div> */}
      {/* testing, unfinished */}
        
        {/* Sidebar component doesn't receive / use any props */}
        <Sidebar />
       
        <Routes>
          <Route path="/" element={<Dashboard recipes={recipes} handleDelete={handleDelete} />}></Route>

          <Route path="/AddRecipe" element={<AddRecipe onAddRecipe={addRecipe} />}></Route>
          <Route path="/Recipes/:recipeName" element={<RecipeDetails recipes={recipes} handleDelete={handleDelete}/>}></Route>
          
          {/* changed to <Route path="/Recipes/Category/:mealType" */}
          {/* Sidebar links updtaed to <Link to={`/Recipes/Category/Whatever`}> */}
          <Route path="/Recipes/Category/:mealType" element={<Category recipes={recipes} handleDelete={handleDelete} />}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Recipes/Edit/:recipeId" element={<EditRecipeForm recipes={recipes} onEditRecipe={onEditRecipe} />}></Route>

          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
