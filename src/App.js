import React, { useEffect, useState } from "react";
import './App.css';

function App() {

  const [rides, setRides] = useState([]);

  useEffect(()=> {
    fetch('')
    .then(r => r.json())
    .then(rides => setRides(rides))
  },[])


  return (
    <div className="App">
        <main>
          Disney
        </main>
    </div>
  );
}

export default App;
