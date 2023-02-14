
import FilterBar from './Components/FilterBar';
import React, { useEffect, useState } from "react";
import Rides from "./Components/Rides";
import './App.css';
import Header from "./Components/Header";

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
          Disney
          <FilterBar/>
        </main>
    </div>
  );
}

export default App;
