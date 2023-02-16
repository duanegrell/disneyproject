

import React, { useEffect, useState } from "react";
import Rides from "./Components/Rides";
import Home from "./Components/Home";
import './App.css';
import Header from "./Components/Header";
import FilterBar from "./Components/FilterBar";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import { Switch, Route } from "react-router-dom";

function App() {

  const [ridesList, setRidesList] = useState([]);
  const [location, setLocation] = useState([]); 
  const [scary, setScary] = useState('');
  const [searchText, setSearchText] = useState("");

  useEffect(()=> {
    fetch(' http://localhost:8004/rides')
    .then(r => r.json())
    .then(ridesList => setRidesList(ridesList))
  },[])

  const locationHandler = (e) => {
    // console.log(e.target.value)
    const value = e.target.value === 'Location' ? '' : e.target.value;
    setLocation(value)
  }

  const filteredRides = () => {
    if (location.toString() === '' && scary === '') {
      return [];
    } else if(location.toString() === '' && scary !== ''){
      return ridesList.filter(ride => {
        return ride;
      })
    } else {
      return ridesList.filter(ride => {
        return ride.Park_location.includes(location)
        // console.log(typeof(ride.Park_location))
      })
    }
  }
    
  // console.log(typeof(location))
  // console.log(typeof(filteredRides()))
  // console.log(filteredRides())

  const scaryHandler = (e) => {
    // console.log("User Selected Value - ", e.target.value)
    setScary(e.target.value)
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
    } else {
      return [...filteredRides()].filter(ride =>
        ride.Ride_type_scary.includes(scary) 
          // console.log(ride.Ride_type_scary.includes(scary))
          // console.log(scary.toString())
          )} 
        }
        // console.log(filteredScary())
    

  const searchedRides = searchText ?
    ridesList.filter(ride => ride.Ride_name.toLowerCase().includes(searchText.toLowerCase()))
    : ridesList;


  return (
    <div className="App">
        <main>
          <NavBar />
          <Header />

          <Switch>
            <Route path="/home">
              <Home/>
            </Route>


            <Route path="/rides">
              <SearchBar setSearchText={setSearchText}/>
              <Rides ridesList={searchedRides} searchText={searchText}/>
            </Route>

            {/* /Filter => Route to main page  */}
            <Route path="/filter">
              <FilterBar 
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
