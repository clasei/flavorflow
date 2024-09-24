import { useState, useEffect } from "react"
import {Routes, Route} from "react-router-dom"
import './App.css'
import Sidebar from "./components/Sidebar.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import About from "./pages/About.jsx"
import NotFound from './pages/NotFound.jsx'
import RecipeDetails from './pages/RecipeDetails.jsx'
import AddRecipe from './pages/AddRecipe.jsx'
import Category from './pages/Category.jsx'
import Favorites from './pages/Favorites.jsx'
import RecipesFromJSON from "./data/recipes.json"
import EditRecipeForm from "./pages/EditRecipeForm.jsx"


function App() {

  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem('recipes')
    const parsedRecipes = savedRecipes ? JSON.parse(savedRecipes) : [] 
    const combinedRecipes = [...RecipesFromJSON, ...parsedRecipes]
    return combinedRecipes
  })

  useEffect(() => {
    const newRecipes = recipes.filter(recipe => 
      !RecipesFromJSON.some(jsonRecipe => jsonRecipe.name === recipe.name))
      localStorage.setItem('recipes', JSON.stringify(newRecipes))
  }, [recipes])


  const addRecipe = (newRecipe) => {
    
    const newRecipeWithId = {
      ...newRecipe,
      id: Math.floor(Math.random() * 1000000) + 1
    }
    setRecipes((currentStateRecipes) => [...currentStateRecipes, newRecipeWithId]) 
  }

  const handleDelete = (index) => {
    const isConfirmed = window.confirm("¿Estás seguro de que deseas eliminar este elemento?");
    
    if (isConfirmed) {
      const updatedRecipes = [...recipes];
      updatedRecipes.splice(index, 1);
      setRecipes(updatedRecipes);
    }
  };

  const onEditRecipe = (editedRecipe) => {
    setRecipes((currentStateRecipes) => {
      return currentStateRecipes.map((recipe) => recipe.id === editedRecipe.id ? editedRecipe : recipe
      )
    })
  }


  const [ allFavorites, setAllFavorites ] = useState([])

  return (
    <>
    <div id='appPage'>
    <div id='mainPage'>

        <Sidebar />
       
        <Routes>
          <Route path="/" element={<Dashboard recipes={recipes} allFavorites={allFavorites} setAllFavorites={setAllFavorites} handleDelete={handleDelete} />}></Route>

          <Route path="/AddRecipe" element={<AddRecipe onAddRecipe={addRecipe} />}></Route>
          <Route path="/Recipes/:recipeName" element={<RecipeDetails recipes={recipes} handleDelete={handleDelete}/>}></Route>
          <Route path="/Recipes/Category/:mealType" element={<Category recipes={recipes} handleDelete={handleDelete} />}></Route>
          <Route path="/Recipes/Favorites" element={<Favorites recipes={recipes} allFavorites={allFavorites} setAllFavorites={setAllFavorites} handleDelete={handleDelete} />}></Route>
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
