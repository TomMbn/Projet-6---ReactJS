import "../styles/Banner.css"
import styled from "styled-components";

export const BannerDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 223px;
margin: 63px 100px 0px;
background-image: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${props => props.cover});
background-size: cover;
background-position: center;
border-radius: 25px;

@media screen and (max-width : 768px){
        margin: 20px 0px;
        border-radius: 10px;
}
`;

function Banner({cover, text}){
    return(
        <BannerDiv cover={cover} className="banner">
            {text && <h1>{text}</h1>}
        </BannerDiv>
    )
}

export default Banner;