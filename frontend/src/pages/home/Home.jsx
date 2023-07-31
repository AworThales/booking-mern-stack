import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import "./home.css";

export default function Home() {
    return (
     <div className="home">
        <NavBar/>
        <Header/>
     </div>
    );
  }