import { Link } from "react-router-dom";
import error from "../assets/images/error.jpg";

function NotFound() {
  return (
    <div className="mainContainer">
      
      <div className="mainBar">
        <p>Page not found</p>
      </div>
        
      <div class='aboutContainer'>
  <h1>🥔 Oops! We overcooked the potatoes!</h1>
  <span>It seems this page has turned into mashed potatoes. Let’s whisk you back to something tastier! 🍽️</span>
  <img id='notFound' src={error} alt="error" />
  <Link id="returnHome" to="/">
          <p>Return Home</p>
      </Link>

</div>

    </div>
  )
}

export default NotFound