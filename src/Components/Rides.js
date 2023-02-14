import React from "react";
import SingleRide from "./SingleRide";

function Rides( {ridesList}) {
    
    const mappedRides = ridesList.map((ride) => (
        <SingleRide 
            key = {ride.Ride_name}
            name = {ride.Ride_name}
            type = {ride.Ride_type_all}
            parkLocation = {ride.Park_location}
            scary = {ride.Ride_type_scary}
            slow = {ride.Ride_type_slow}
            water = {ride.Ride_type_water}
            heightRequirement = {ride.Height_req_inches}
            rideDuration = {ride.Ride_duration_min}
            image = {ride.Image}
        />

    ))

    return (
    <ul className="cards">
        {mappedRides}
    </ul>
    );
};

export default Rides;


// "Ride_name": "Alien Swirling Saucers",
// "Park_location": "HS",
// "Park_area": "Toy Story Land",
// "Ride_type_all": "spinning",
// "Ride_type_thrill": "No",
// "Ride_type_spinning": "Yes",
// "Ride_type_slow": "No",
// "Ride_type_small_drops": "No",
// "Ride_type_big_drops": "No",
// "Ride_type_dark": "No",
// "Ride_type_scary": "No",
// "Ride_type_water": "No",
// "Fast_pass": "Yes",
// "Classic": "No",
// "Age_interest_all": "all ages",
// "Age_interest_preschoolers": "Yes",
// "Age_interest_kids": "Yes",
// "Age_interest_tweens": "Yes",
// "Age_interest_teens": "Yes",
// "Age_interest_adults": "Yes",
// "Height_req_inches": 32,
// "Ride_duration_min": 1.5,
// "Open_date": "6/30/2018 12:00:00 AM",
// "Age_of_ride_days": 480,
// "Age_of_ride_years": 1.3141683778234086,
// "Age_of_ride_total": "1 years 3 months 24 days",
// "TL_rank": 31,
// "TA_Stars": "NA"