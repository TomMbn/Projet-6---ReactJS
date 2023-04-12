import Banner from "../components/Banner";
import Logement from "../components/Logement";
import BannerImage from "../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg"
import { useEffect, useState } from "react";
import "../styles/Logements.css";



function Home(){

    const [data, setData]= useState([]);

    const getData=()=>{
        fetch('logements.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            
            return response.json();
          })
          .then(function(myJson) {
            
            setData(myJson)
          });
      }
      useEffect(()=>{
        getData()
      },[])
      
    return(
    <div>
        <Banner cover={BannerImage}/>
        <div className="logements">
          <ul className="logementList">
            {data.map((logement)=> (
                <Logement
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