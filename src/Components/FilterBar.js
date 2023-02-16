import React, {useState} from "react";
// import SingleRide from './SingleRide';
import Rides from './Rides';

function FilterBar({locationHandler, scaryHandler}) {
    // function handleClickSearch() {
    //     console.log('clicked')
    // }
    // // filter buttons here
    // // const [location, setLocation] = useState([]); 
    
    // const [scary, setScary] = useState(true);
    const [water, setWater] = useState(true);
    const [kids, setKids] = useState(true);
    const [spin, setSpin] = useState(true);
    const [heightReq, setHeightReq] = useState([]);
    const [durations, setDurations] = useState([]);

    const locations = ['HS', 'MK', 'AK', 'EC'];
    
    // const locationHandler = (e) => {
    //     console.log("User Selected Value - ", e.target.value)
    //     const rideLocation = ridesList.filter(ride => {

    //             return ride.Park_location.includes(e.target.value)
                
    //         })
    //         console.log(rideLocation)
    //         setLocation(rideLocation)
    // }

    const scaryOrNot = ['Yes', 'No'];
   
    const waterRide = ['Yes', 'No'];
    const waterRideHandler = (e) => {
        console.log("User Selected Value - ", e.target.value)
    }
    const kidsFriendly = ['Yes', 'No'];
    const kidsFriendlyHandler = (e) => {
        console.log("User Selected Value - ", e.target.value)
    }
    const spinning = ['Yes', 'No'];
    const spinningHandler = (e) => {
        console.log("User Selected Value - ", e.target.value)
    }
    const height = ['=>44', '=>40', '=>38', '=>48', '=>35', '=>32'];
    const heightHandler = (e) => {
        console.log("User Selected Value - ", e.target.value)
    }
    const duration = [`<=2`, `<=5`, `<=10`, `>10`];
    const durationHandler = (e) => {
        console.log("User Selected Value - ", e.target.value)
    }
    
    return (
        <div>
            <h2>
            <select onChange={locationHandler}>
                <option>Location </option>
                {locations.map((location, index) => {
                    return <option key={index} >{location}</option>
                })}
            </select>
            <select onChange={scaryHandler}>
                <option>Scary or Not </option>
                {scaryOrNot.map((scaryOrNot, index) => {
                    return <option key={index}>{scaryOrNot}</option>
                })}
            </select>
            <select onChange={waterRideHandler}>
                <option>Water Ride </option>
                {waterRide.map((waterRide, index) => {
                    return <option key={index}>{waterRide}</option>
                })}
            </select>
            <select onChange={kidsFriendlyHandler}>
                <option>Kids friendly </option>
                {kidsFriendly.map((kidsFriendly, index) => {
                    return <option key={index}>{kidsFriendly}</option>
                })}
            </select>
            <select onChange={spinningHandler}>
                <option>Spinning </option>
                {spinning.map((spinning, index) => {
                    return <option key={index}>{spinning}</option>
                })}
            </select>
            <select onChange={heightHandler}>
                <option>Height </option>
                <option>{}</option>
            </select>
            <select onChange={durationHandler}>
                <option>Duration </option>
                <option>{}</option>
            </select>
            <br/>
            {/* <button className="search-btn" onClick={handleClickSearch}>Search</button> */}
            </h2>
            {/* <ul className="card-filtered-by-location"> */}
                {/* <SingleRide /> */}
                {/* <Rides /> */}
            {/* </ul> */}

        </div>
    )
}


export default FilterBar;