import { Link } from "react-router-dom";
import "../styles/Header.css";
import Logo from "../assets/logo-Rouge.png"

function Header(){
    return(
        <div className="Header">
            <img src={Logo} alt="Logo Kasa"/>

            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </div>
    )
}

export default Header;