import React, {useState} from "react";

function SingleRide( {key, name, type, parkLocation, scary, slow, water, heightRequirement, rideDuration, image } ) {

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

    console.log(clicked)

    return (
    <li className = 'cards_item' onClick = {handleClick}>
        <div className="card">
        <img 
            src={image}
            alt={name}
            className="card__image"
         />

        <div className="card__content">
            <div className="card__title">{name} </div>
            <p className="card__text">Type: {type}</p>
            {/* <p>{parkLocation}</p> */}
            <div className="card__detail" >
                <p>{clicked ? location : null}</p>
                <p>{clicked ? isScary : null}</p>
                <p>{clicked ? isSlow : null}</p>
                <p>{clicked ? isWet : null}</p>
                <p>{clicked ? duration : null}</p>
                <p>{clicked ? height : null}</p>
            </div>
            <div className="card_comment_form">
                <form>
                    <label>
                        Comment:
                        <input type="text" name="comment" />
                    </label>
                    <input type="submit" name="Submit" />
                </form>
            </div>
            <div className="card_comments">
                {/* Unordered list of comments will go here */}
            </div>
            </div>
        </div>
    </li>
    );
};

export default SingleRide;