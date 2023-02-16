import React, {useState} from "react";
import Comments from "./Comments";

function SingleRide( { key, name, type, parkLocation, scary, slow, water, heightRequirement, rideDuration, image, comments } ) {

    const[clicked, setClicked] = useState(false);
    
    const duration = [`Duration: ${rideDuration} minutes`];
    const height = [`Height Requirement: ${heightRequirement} inches`]
    const isWet = [`Water: ${water}`]
    const isSlow = [`Slow: ${slow}`]
    const isScary = [`Scary: ${scary}`]
    const location = [`Location: ${parkLocation}`]


    // if (parkLocation === "MK") {
    //     return "Location: Hong Kong"
    // }


    function handleClick() {
      if (clicked == true) {
        setClicked(false);
      }
      else{
          setClicked(true);
      }
    }

    return (
    <li className = 'cards_item'>
        <div className="card">
            <img 
                src={image}
                alt={name}
                className="card__image"
            />
            <div onClick = {handleClick} className="card__content">
                <div className="card__title">{name} </div>
                    <p className="card__text">Type: {type}</p>
                    {/* <p className="comments">{comments}</p> */}
                    <div className="card__detail" >
                        <p>{clicked ? location : null}</p>
                        <p>{clicked ? isScary : null}</p>
                        <p>{clicked ? isSlow : null}</p>
                        <p>{clicked ? isWet : null}</p>
                        <p>{clicked ? duration : null}</p>
                        <p>{clicked ? height : null}</p>
                    </div>         
                </div>      
                <div>                   
                    {/* <p>{clicked ?  <Comments/>: null}</p> */}
                    {clicked && <Comments comment={comments} key={key}/> }
                <div/>
            </div>
        </div>
    </li>
    );
};

export default SingleRide;