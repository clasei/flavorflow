// import Footer from "./Footer"
// import Navbar from "./NavBar.jsx"
import { Link } from "react-router-dom";

import Dashboard from "../pages/Dashboard.jsx";
import About from "../pages/About.jsx";

import profileImg from "../assets/icons/profile.svg";
import logoImg from "../assets/icons/logo.png";
import homeImg from "../assets/icons/home.svg";
import cardImg from "../assets/icons/card.svg";
import breackfastImg from "../assets/icons/breackfast.svg";
import lunchImg from "../assets/icons/lunch.svg";
import dinnerImg from "../assets/icons/dinner.svg";
import dessertImg from "../assets/icons/dessert.svg";
import snackImg from "../assets/icons/snack.svg";
import heart1Img from "../assets/icons/heart1.svg";
import thumbsUp1Img from "../assets/icons/thumbsUp1.svg";
import githubImg from "../assets/icons/github.svg";
import addImg from "../assets/icons/add.svg";

function Sidebar() {
  
  return (
    <div className="sidebar" id="">
      <div className="sidebarIcons">
        <section className="sidebarProfileXs">
        <Link to="/">
          <img className="logoImg" src={logoImg} alt="" />
          </Link>
        </section>
     
        <section className="sidebarLinksXs">
        <Link to="/" element={<Dashboard />}>
          <img id="imgLogo" src={homeImg} alt="home" />
          </Link>
          <Link to="/About" element={<About />}>
          <img src={cardImg} alt="about us" />
          </Link>
        </section>
        <hr />
        <section className="sidebarCategoriesXs">
        <Link to={`/Recipes/Category/Breakfast`}>
          <img src={breackfastImg} alt="breackfast" />
          </Link>
          <Link to={`/Recipes/Category/Lunch`}>
          <img src={lunchImg} alt="lunch" />
          </Link>
          <Link to={`/Recipes/Category/Dinner`}>
          <img src={dinnerImg} alt="dinner" />
          </Link>
          <Link to={`/Recipes/Category/Dessert`}>
          <img src={dessertImg} alt="dessert" />
          </Link>
          <Link to={`/Recipes/Category/Snack`}>
          <img src={snackImg} alt="snack" />
          </Link>
        </section>
        <hr />

        <section className="sidebarFavXs">
          <img src={heart1Img} alt="favorite" />
          <img src={thumbsUp1Img} alt="liked" />
          <Link className="buttonSmall" to="/AddRecipe">
            <img id="buttonLargeAddImg" src={addImg} alt="" />
          </Link>
        </section>

        <hr />
        <section className="sidebarFooterXs">
        <a id="githubLink" href="https://github.com/clasei/flavorflow">
          <img src={githubImg} alt="github" /></a>
        </section>
      </div>

      <div className="sidebarText">
        <section className="sidebarProfile">
          <img className="profileImg" src={profileImg} alt="" />
          <p>Fei-Fei Li</p>
        </section>

     

        <section className="sidebarLinks">
          <Link to="/" element={<Dashboard />}>
            Home
          </Link>
          <Link to="/About" element={<About />}>
            About Us
          </Link>
        </section>

        <hr />

        <section className="sidebarCategories">
          <p className="smallHeader">Categories</p>
          
          <Link to={`/Recipes/Category/Breakfast`}>
            <p>Breakfast</p>
          </Link>
          
          <Link to={`/Recipes/Category/Lunch`}>
          <p>Lunch</p>
          </Link>
          
          <Link to={`/Recipes/Category/Dinner`}>
          <p>Dinner</p>
          </Link>

          <Link to={`/Recipes/Category/Dessert`}>
          <p>Dessert</p>
          </Link>

          <Link to={`/Recipes/Snack`}>
          <p>Snack</p>
          </Link>

        </section>

        <hr />

        <section className="sidebarFav">
          <p className="smallHeader">Featured</p>
          <p>Favorites</p>
          <p>Liked</p>
          <Link className="buttonLarge" to="/AddRecipe">
            <img id="buttonLargeAddImg" src={addImg} alt="" />
            <p>Add recipe</p>
          </Link>
        </section>

        <hr />

  

        <section className="sidebarFooter">
          <a id="githubLink" href="https://github.com/clasei/flavorflow">
            FlavorFlow Repo
          </a>
        </section>
      </div>
    </div>
  );
}

export default Sidebar;
