import { useState } from "react"
import "../styles/Accordion.css"
import upArrow from "../assets/upArrow.png"
import downArrow from "../assets/downArrow.png"

function Accordion({title, content}){
    const [isActive, setIsActive] = useState(false);
    return(
        <div className="accordionWrapper">
            <div className="accordionTitle" onClick={()=>setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? <img src={upArrow} alt="upArrow"/> : <img src={downArrow} alt="downArrow"/>}</div>
            </div>
            {isActive && <div className="accordionContent">{content}</div>}
        </div>
    )
}

export default Accordion;