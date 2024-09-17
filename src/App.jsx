import './App.css'
import Navbar from "./components/NavBar.jsx"
import Sidebar from "./components/Sidebar.jsx"

function App() {

  return (
    <div id='appPage'>
      <Navbar />
      <div id='mainPage'>
        <Sidebar />
        <div>Contenido</div>
      </div>
    </div>
  )
}

export default App
