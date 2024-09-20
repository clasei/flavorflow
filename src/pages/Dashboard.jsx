import {Link} from "react-router-dom"
import RecipeList from '../components/RecipeList.jsx'


function Dashboard() {
  return (
    <div className='mainContainer'>

      <RecipeList />

      <Link to="/AddRecipe">
      <button>Add recipe</button>
      </Link>

    </div>
  )
}

export default Dashboard