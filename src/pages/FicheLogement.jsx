import { useParams } from "react-router-dom";
import datas from "../datas/logements.json";
import Carousel from "../components/Carousel";
import "../styles/FicheLogement.css";
import Accordion from "../components/Accordion";
import Rating from "../components/Rating";
import Error from "./Error";

function FicheLogement(){
    const { LogementId } = useParams();
    const logement = datas.find((logement) => logement.id === LogementId);
    if (!logement){
        return(
            <Error/>
        )
    }

    function createList(items) {
        return (
          <ul className="equipmentsList">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      }

    const [lastname, firstname] = logement.host.name.split(' ')

    return(
        <div className="logementPage">
            <Carousel gallery={logement.pictures}/>
            <div className="logementInfo">
                <div className="logementWrapper">
                    <h1>{logement.title}</h1>
                    <h2 className="location">{logement.location}</h2>
                    <div className="tagsWrapper">
                        {logement.tags.map((tag)=> (<div className="tag" key={tag}>{tag}</div>))}
                    </div>
                </div>
                <div className="hostRatingWrapper">
                    <div className="hostInfo">
                        <div className="hostName">
                            <h2>{lastname}</h2>
                            <h2>{firstname}</h2>
                        </div>
                        <img src={logement.host.picture} alt="Photo de profil"/> 
                    </div>
                    <div className="rating">
                            <Rating rating={logement.rating}/>
                    </div> 
                </div>
                
                
            </div>
            <div className="logementAccordions">
            <Accordion title="Description" content={logement.description}/>
            <Accordion title="Équipements" content={createList(logement.equipments)}/>
            </div>
        </div>
    )
}

export default FicheLogement;