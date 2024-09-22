import { Link } from "react-router-dom"
import RecipeList from '../components/RecipeList.jsx'
import addImg from "../assets/icons/add.svg";

function Dashboard({ recipes, handleDelete }) {
  return (
    <div className='mainContainer'>
      <div className="mainBar">
        <p>Home</p>
      </div>
      <main id="containerRecipes">
        <RecipeList recipes={recipes} handleDelete={handleDelete}/>
      </main>
      
      <Link id="buttonDashboard" to="/AddRecipe">
          <img id="buttonLargeAddImg" src={addImg} alt="Add Recipe" />
          <p>Add recipe</p>
      </Link>

    </div>
  )
}

export default Dashboard