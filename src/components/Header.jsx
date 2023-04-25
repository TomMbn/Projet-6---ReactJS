import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
import Logo from "../assets/logo-rouge.png"

function Header(){
    let location = useLocation();

    return(
        <div className="Header">
            <img src={Logo} alt="Logo Kasa"/>

            <nav>
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>Accueil</Link>
                <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>A Propos</Link>
            </nav>
        </div>
    )
}

export default Header;