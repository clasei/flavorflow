import './App.css'
import Sidebar from "./components/Sidebar.jsx"
import RecipeList from './components/RecipeList.jsx'
import Dashboard from "./pages/Dashboard.jsx"
import About from "./pages/About.jsx"
import {Routes, Route} from "react-router-dom"


function App() {

  return (
    <>
    <div id='appPage'>
    <div id='mainPage'>
        <Sidebar />
       
       <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/About" element={<About/>}></Route>
       </Routes>
      </div>
    </div>
    </>
  )
}

export default App
