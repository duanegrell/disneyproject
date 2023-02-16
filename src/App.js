import React, { useEffect, useState } from "react";
import Rides from "./Components/Rides";
import './App.css';
import Header from "./Components/Header";
import FilterBar from "./Components/FilterBar";
import NavBar from "./Components/NavBar";
import { Switch, Route } from "react-router-dom";

function App() {

  const [ridesList, setRidesList] = useState([]);
  const [location, setLocation] = useState([]); 
  const [scary, setScary] = useState('');

  useEffect(()=> {
    fetch(' http://localhost:8004/rides')
    .then(r => r.json())
    .then(ridesList => setRidesList(ridesList))
  },[])

  const locationHandler = (e) => {
    // console.log("User Selected Value - ", e.target.value)
    setLocation(e.target.value)
  }
  const filteredRides = () => {
    if (location.toString() === '' && scary === '') {
      return []
    } else {
      return ridesList.filter(ride => 
          ride.Park_location.includes(location.toString())
      //console.log(typeof(ride.Park_location))
      )}
    }
  // console.log(typeof((location)))
  // console.log(typeof(filteredRides()))
  // console.log(filteredRides())

  const scaryHandler = (e) => {
    console.log("User Selected Value - ", e.target.value)
    setScary(e.target.value)
    // if (scary === true) {
    //     setScary(false)
    // } else {
    //     setScary(true);
    // } 
  }

  const filteredScary = () => {
    
    if (scary === '') {
      return [...filteredRides()];
    } else if (location.toString() === '') {
      return [...ridesList].filter(ride =>
        // console.log(ride)
        // console.log(ride.Ride_type_scary)
        // console.log(typeof(ride.Ride_type_scary))
        ride.Ride_type_scary.includes(scary)
        // ride.Ride_type_scary.includes(scary.toString())
        )

    }
      else {
          return [...filteredRides()].filter(ride =>
            ride.Ride_type_scary.includes(scary) 
            // console.log(ride.Ride_type_scary.includes(scary))
            // console.log(scary.toString())
            )
        } 
  }
  // console.log(filteredScary())

  return (
    <div className="App">
        <main>
          <NavBar />
          <Header />

          <Switch>
            
            <Route path="/rides">
              <Rides ridesList={ridesList}/>
            </Route>

            {/* /Filter => Route to main page  */}
            <Route path="/filter">
              <FilterBar 
                // ridesList={ridesList} 
                locationHandler={locationHandler}
                scaryHandler={scaryHandler}
              />
              <Rides ridesList={filteredScary()}/>
            </Route>

            {/* / => Route to main page  */}
            

          </Switch>

        </main>
    </div>
  );
}

export default App;
