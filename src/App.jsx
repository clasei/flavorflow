import './App.css'
import Navbar from "./components/NavBar.jsx"
import Sidebar from "./components/Sidebar.jsx"
import RecipeList from './components/RecipeList.jsx'
import Dashboard from "./pages/Dashboard.jsx"
import {Routes, Route} from "react-router-dom"


function App() {

  return (
    <>
    <div id='appPage'>
      <Navbar />
    <div id='mainPage'>
        <Sidebar />
       
       <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
       </Routes>
      </div>
    </div>
    </>
  )
}

export default App
