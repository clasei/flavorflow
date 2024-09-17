import logo from "../assets/towel.png"

function NavBar() {
  
  return (
    <div id="navBar">
      <img id="logo" src={logo} alt="flavorflow-logo" />
      <p>FlavorFlow</p>
    </div>
  )
}

export default NavBar