import Footer from "./Footer"
import {Link} from "react-router-dom"
import Dashboard from "../pages/Dashboard.jsx"
import About from "../pages/About.jsx"
import Navbar from "./NavBar.jsx"

import profileImg from "../assets/icons/profile.svg";


function Sidebar() {
  return (

    <div className="sidebar" id="">

      <div className="sidebarIcons">
        
      </div>


      <div className="sidebarText">

        <section className="sidebarProfile">
          <img className="profileImg" src={profileImg} alt="" />
          <h2>Lira</h2>
        </section>

        <hr />

        <section className="sidebarLinks">
          <Link to="/" element={<Dashboard/>}>Home</Link>
          <Link to="/About" element={<About />}>About Us</Link>
        </section>

        <hr />

        <section className="sidebarCategories">
        <p className="smallHeader">Categories</p>
          <p>Breakfast</p>
          <p>Lunch</p>
          <p>Snack</p>
          <p>Dinner</p>
        </section>

        <hr />

        <section className="sidebarFav">
        <p className="smallHeader">Featured</p>
          <p>Favorites</p>
          <p>Liked</p>
        </section>

        <hr />

        <section className="sidebarFooter">
          <a id="githubLink" href="https://github.com/clasei/flavorflow">FlavorFlow Repo</a>
        </section>
      </div>

    </div>
    // <div id="sidebar">
    //   <Navbar />
    //   <section id="sidebarLinks">
    //     <Link to="/" element={<Dashboard/>}>Home</Link>
    //     <Link to="/About" element={<About />}>About Us</Link>
    //   </section>
    //   <Footer />
    // </div>
  )
}

export default Sidebar
