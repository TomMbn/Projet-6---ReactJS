import styled from "styled-components";
import { Link } from "react-router-dom";

const Item = styled.li`
    font-family: "Montserrat";
    position : absolute;
    font-size : 18px;
    font-weight : 500;
    bottom : 20px;
    left : 20px;
    color: #FFFFFF;
    `;

const LogementItem = styled.div`
    background-image: url(${props => props.cover});
    background-size: cover;
    position : relative;
    height: 340px;
    border-radius: 10px;
    padding: 20px;
    @media screen and (max-width : 768px){
            height : 255px;
    }
    `;
function Logement({id, name, cover}){
    return(
        <Link to={`/logements/${id}`}>
            <LogementItem cover={cover}>
                <Item key={id}>
                    {name}
                </Item>
            </LogementItem>
        </Link>
    )
}

export default Logement;