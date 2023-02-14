import React from "react";

function SingleRide( {key, name, type, parkLocation, scary, slow, water, heightRequirement, rideDuration, image } ) {

    return (
    <li className = 'cards_item'>
        <div className="card">
        <img 
            src={image}
            alt={name}
            className="card__image"
         />
        <div className="card__content">
            <div className="card__title">Name: {name} </div>
            <p className="card__text">Type: {type}</p>
            <div className="card__detail">
                <p>Location: {parkLocation}</p>
                <p>Scary: {scary}</p>
                <p>Slow: {slow}</p>
                <p>Water: {water}</p>
                <p>Height Requirement: {heightRequirement} inches</p>
                <p>Duration: {rideDuration} minutes</p>
            </div>
            </div>
        </div>
    </li>
    );
};

export default SingleRide;