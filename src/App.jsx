import './App.css'
import Sidebar from "./components/Sidebar.jsx"
import RecipeList from './components/RecipeList.jsx'
import Dashboard from "./pages/Dashboard.jsx"
import About from "./pages/About.jsx"
import {Routes, Route} from "react-router-dom"
import NotFound from './pages/NotFound.jsx'
import RecipeDetails from './pages/RecipeDetails.jsx'


function App() {

  return (
    <>
    <div id='appPage'>
    <div id='mainPage'>
        <Sidebar />
       
       <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/recipes/:recipeName" element={<RecipeDetails/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
       </Routes>
      </div>
    </div>
    </>
  )
}

export default App
