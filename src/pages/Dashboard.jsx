import { Link } from "react-router-dom"
import { useState} from "react"
import RecipeList from '../components/RecipeList.jsx'
import addImg from "../assets/icons/add.svg";

function Dashboard({ recipes, handleDelete }) {
// *** Añadimos el estado para el campo de búsqueda ***
const [searchTerm, setSearchTerm] = useState("");

// *** Filtramos las recetas solo si el campo de búsqueda no está vacío ***
const filteredRecipes = searchTerm
  ? recipes.filter(recipe => 
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : recipes; // Si no hay nada en el campo de búsqueda, mostramos todas las recetas

  
  return (
    <div className='mainContainer'>
      <div className="mainBar">
        <p>Home</p>
        {/* *** Añadimos un campo de búsqueda que actualiza el estado según el texto ingresado *** */}
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // actualizamos el estado con el texto que se escribe
        />
      </div>
      <main id="containerRecipes">
        {/* *** Pasamos las recetas filtradas o todas las recetas si no hay texto en el buscador *** */}
        <RecipeList recipes={filteredRecipes} handleDelete={handleDelete} />
      </main>
      
      <Link id="buttonDashboard" to="/AddRecipe">
          <img id="buttonLargeAddImg" src={addImg} alt="Add Recipe" />
          <p>Add recipe</p>
      </Link>

    </div>
  )
}

export default Dashboard