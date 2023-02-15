import React, { useEffect, useState } from "react";
import Rides from "./Components/Rides";
import './App.css';
import Header from "./Components/Header";
import FilterBar from "./Components/FilterBar";
import NavBar from "./Components/NavBar";
import { Switch, Route } from "react-router-dom";

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
          <NavBar />
          <Header />

          <Switch>
            
            <Route path="/rides">
              <Rides ridesList={ridesList}/>
            </Route>

            {/* /Filter => Route to main page  */}
            <Route path="/filter">
              <FilterBar ridesList={ridesList}/>
            </Route>

            {/* / => Route to main page  */}
            

          </Switch>

        </main>
    </div>
  );
}

export default App;
