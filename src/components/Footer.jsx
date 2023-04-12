import "../styles/Footer.css";
import logo from "../assets/logo-blanc.png";

function Footer(){
    return(
        <div className="footer">
            <img src={logo} alt="logo"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer;