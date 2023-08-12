import "./navBar.css";
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
     <div className="navBar">
        <div className="navBarContainer">
          <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
            <span className="navLogo">TBooking</span>
          </Link>
          <div className="navBarItems">
            <button className="navBarButton">Register</button>
            <button className="navBarButton">Login</button>
          </div>
        </div>
     </div>
    );
  }