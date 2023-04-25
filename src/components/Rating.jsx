import fullStar from "../assets/redStar.png"
import emptyStar from "../assets/greyStar.png"

function Rating({rating,total=5}){
    return(
    <>
    {[...Array(total)].map((value, index)=>{
        index+=1
        return(
            <img src={rating >= index ? fullStar : emptyStar} alt="star" key={index}/>
        )
    })
    }
    </>)
}

export default Rating