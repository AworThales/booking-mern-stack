import { useContext } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

export default function NavBar() {

  const { user } = useContext(AuthContext);
    return (
     <div className="navBar">
        <div className="navBarContainer">
          <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
            <span className="navLogo">ThalesBooking</span>
          </Link>
          {user ? (user.username) : (<div className="navBarItems">
            <button className="navBarButton">Register</button>
            <button className="navBarButton">Login</button>
          </div>)}
        </div>
     </div>
    );
  }