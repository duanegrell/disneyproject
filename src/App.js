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

  useEffect(()=> {
    fetch(' http://localhost:8004/rides')
    .then(r => r.json())
    .then(ridesList => setRidesList(ridesList))
  },[])

  const locationHandler = (e) => {
    console.log("User Selected Value - ", e.target.value)
    setLocation(e.target.value)
  }
  const filteredRides = () => { 
    return ridesList.filter(ride => 
        ride.Park_location.includes(location.toString())
    //console.log(typeof(ride.Park_location))
    )}
  // console.log(typeof((location)))
  // console.log(filteredRides())
  // console.log(ridesList[1])  
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
              <FilterBar ridesList={ridesList} locationHandler={locationHandler}/>
              <Rides ridesList={filteredRides()}/>
            </Route>

            {/* / => Route to main page  */}
            

          </Switch>

        </main>
    </div>
  );
}

export default App;
