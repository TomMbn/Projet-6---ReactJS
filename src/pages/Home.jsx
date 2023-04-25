import Banner from "../components/Banner";
import Logement from "../components/Logement";
import BannerImage from "../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg"
import "../styles/Home.css";
import datas from "../datas/logements.json"



function Home(){

    return(
    <div className="homePage">
        <Banner cover={BannerImage} text="Chez vous, partout et ailleurs"/>
        <div className="logements">
          <ul className="logementList">
            {datas.map((logement)=> (
                <Logement key={logement.id}
                  id = {logement.id}
                  name = {logement.title}
                  cover={logement.cover}
                />
            ))}
          </ul>
        </div>
    </div>
    )
}

export default Home;