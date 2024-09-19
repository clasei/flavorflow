import Footer from "./Footer"
import {Routes, Route, Link} from "react-router-dom"
import Dashboard from "../pages/Dashboard.jsx"
import About from "../pages/About.jsx"
import Navbar from "./NavBar.jsx"

function Sidebar() {
  return (
    <div id="sidebar">
      <Navbar />
      <section id="sidebarLinks">
        <Link to="/" element={<Dashboard/>}>Home</Link>
        <Link to="/About" element={<About />}>About Us</Link>
      </section>
      <Footer />
    </div>
  )
}

export default Sidebar
