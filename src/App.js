
import React, { useEffect, useState } from "react";
import Rides from "./Components/Rides";
import './App.css';
import Header from "./Components/Header";
import FilterBar from "./Components/FilterBar";

function App() {

  const [ridesList, setRidesList] = useState([]);

  useEffect(()=> {
    fetch(' http://localhost:8004/rides')
    .then(r => r.json())
    .then(ridesList => setRidesList(ridesList))
  },[])

  return (
    <div className="App">
        <main>
          <Header />
          <FilterBar ridesList={ridesList} />
          <Rides ridesList={ridesList}/>
        </main>
    </div>
  );
}

export default App;
