

function FilterBar() {

    const rides =
    [{
        "Ride_name": "Alien Swirling Saucers",
        "Park_location": "HS",
        "Park_area": "Toy Story Land",
        "Ride_type_all": "spinning",
        "Ride_type_thrill": "No",
        "Ride_type_spinning": "Yes",
        "Ride_type_slow": "No",
        "Ride_type_small_drops": "No",
        "Ride_type_big_drops": "No",
        "Ride_type_dark": "No",
        "Ride_type_scary": "No",
        "Ride_type_water": "No",
        "Fast_pass": "Yes",
        "Classic": "No",
        "Age_interest_all": "all ages",
        "Age_interest_preschoolers": "Yes",
        "Age_interest_kids": "Yes",
        "Age_interest_tweens": "Yes",
        "Age_interest_teens": "Yes",
        "Age_interest_adults": "Yes",
        "Height_req_inches": 32,
        "Ride_duration_min": 1.5,
        "Open_date": "6/30/2018 12:00:00 AM",
        "Age_of_ride_days": 480,
        "Age_of_ride_years": 1.3141683778234086,
        "Age_of_ride_total": "1 years 3 months 24 days",
        "TL_rank": 31,
        "TA_Stars": "NA"
    },{
        "Ride_name": "Astro Orbiter",
        "Park_location": "MK",
        "Park_area": "Tomorrowland",
        "Ride_type_all": "spinning, slow",
        "Ride_type_thrill": "No",
        "Ride_type_spinning": "Yes",
        "Ride_type_slow": "Yes",
        "Ride_type_small_drops": "No",
        "Ride_type_big_drops": "No",
        "Ride_type_dark": "No",
        "Ride_type_scary": "No",
        "Ride_type_water": "No",
        "Fast_pass": "No",
        "Classic": "Yes",
        "Age_interest_all": "all ages",
        "Age_interest_preschoolers": "Yes",
        "Age_interest_kids": "Yes",
        "Age_interest_tweens": "Yes",
        "Age_interest_teens": "Yes",
        "Age_interest_adults": "Yes",
        "Height_req_inches": 0,
        "Ride_duration_min": 1.5,
        "Open_date": "2/25/1995 12:00:00 AM",
        "Age_of_ride_days": 9006,
        "Age_of_ride_years": 24.657084188911703,
        "Age_of_ride_total": "24 years 7 months 27 days",
        "TL_rank": 43,
        "TA_Stars": 3.5
    }]

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
    )
}


export default FilterBar;