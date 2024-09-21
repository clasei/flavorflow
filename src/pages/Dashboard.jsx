import {Link} from "react-router-dom"
import RecipeList from '../components/RecipeList.jsx'
import addImg from "../assets/icons/add.svg";

function Dashboard() {
  return (
    <div className='mainContainer'>

      <RecipeList />

      <Link id="buttonDashboard" to="/AddRecipe">
          <img id="buttonLargeAddImg" src={addImg} alt="" />
          <p>Add recipe</p>
      </Link>

    </div>
  )
}

export default Dashboard