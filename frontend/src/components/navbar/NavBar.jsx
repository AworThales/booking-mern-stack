import "./navBar.css";

export default function NavBar() {
    return (
     <div className="navBar">
        <div className="navBarContainer">
          <span className="navLogo">TBooking</span>
          <div className="navBarItems">
            <button className="navBarButton">Register</button>
            <button className="navBarButton">Login</button>
          </div>
        </div>
     </div>
    );
  }