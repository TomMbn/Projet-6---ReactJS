import styled from "styled-components";
import { Link } from "react-router-dom";

const Item = styled.li`
    font-family: "Montserrat";
    position : absolute;
    bottom : 20px;
    left : 20px;
    color: #FFFFFF;
    `;

const LogementItem = styled.div`
    background-image: url(${props => props.cover});
    background-size: cover;
    position : relative;
    width: 340px;
    height: 340px;
    border-radius: 10px;
    margin-bottom: 50px;
    padding: 20px
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