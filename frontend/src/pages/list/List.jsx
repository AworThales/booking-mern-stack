import "./list.css";
import NavBar from "../../components/navbar/NavBar"
import Header from "../../components/header/Header"

export default function List() {
    return (
     <div className="list">
        <NavBar />
        <Header type="list" />
     </div>
    );
  }