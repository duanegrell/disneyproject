import React from "react";

function SingleRide( {key, name, type, parkLocation, scary, slow, water, heightRequirement, rideDuration } ) {

    return (
    <div className = 'tile'>
        <p>---</p>
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>Location: {parkLocation}</p>
        <p>Scary: {scary}</p>
        <p>Slow: {slow}</p>
        <p>Water: {water}</p>
        <p>Height Requirement: {heightRequirement} inches</p>
        <p>Duration: {rideDuration} minutes</p>
    </div>
    );
};

export default SingleRide;