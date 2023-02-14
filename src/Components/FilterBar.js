import React from "react";

function FilterBar() {

    function handleClickSearch() {
        console.log('clicked')
    }

    // filter buttons here
    const locations = ['HS', 'MK', 'AK', 'EC'];
    const locationHandler = (e) => {
        console.log("User Selected Value - ", e.target.value)
    }
    const scaryOrNot = ['Yes', 'No'];
    const scaryHandler = (e) => {
        console.log("User Selected Value - ", e.target.value)
    }
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
                <option>{}</option>
            </select>
            <select onChange={waterRideHandler}>
                <option>Water Ride </option>
                <option>{}</option>
            </select>
            <select onChange={kidsFriendlyHandler}>
                <option>Kids friendly </option>
                <option>{}</option>
            </select>
            <select onChange={spinningHandler}>
                <option>Spinning </option>
                <option>{}</option>
            </select>
            <select onChange={heightHandler}>
                <option>Height </option>
                <option>{}</option>
            </select>
            <select onChange={durationHandler}>
                <option>Duration </option>
                <option>{}</option>
            </select>

            {/* <label for="Location"></label> */}
            {/* <select name="location" id="location-select">
                <option value="">Location </option>
                <option value="hs">HS</option>
                <option value="mk">MK</option>
                <option value="ak">AK</option>
                <option value="ec">EC</option>
            </select> */}
            {/* <select name="Scary or Not" id="Scary-or-Not-select">
                <option value="">Scary or Not </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>*/}
            <br/>
            <button className="search-btn" onClick={handleClickSearch}>Search</button>
            </h2>
        </div>
    )
}


export default FilterBar;