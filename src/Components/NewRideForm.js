import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewRideForm({ handlePostRide }) {
  const [newName, setNewName] = useState("");
  const [newType, setNewType] = useState("");
  const [newParkLocation, setnewParkLocation] = useState("");
  const [newScary, setnewScary] = useState("");
  const [newSlow, setnewSlow] = useState("");
  const [newWater, setnewWater] = useState("");
  const [newHeightRequirement, setnewHeightRequirement] = useState("");
  const [newRideDuration, setnewRideDuration] = useState("");
  const [newImage, setnewImage] = useState("");
  const [newComments, setnewComments] = useState("");
  
  let history = useHistory();

  function handleClick() {
    history.push("/rides");
  }

  function handleSubmit(e) {
    e.preventDefault();
    window.alert("Ride Added!!!!!!")

    const newRide = {
      Ride_name: newName,
      Ride_type_all: newType,
      Park_location: newParkLocation,
      Ride_type_scary: newScary,
      Ride_type_slow: newSlow,
      Ride_type_water: newWater,
      Height_req_inches: newHeightRequirement,
      Ride_duration_min: newRideDuration,
      Image: newImage,
      Comments: newComments,
    };

    fetch(" http://localhost:8004/rides", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRide),
    })
      .then((response) => response.json())
      .then((response) => {
        handlePostRide((response))
        handleClick()
      });

  }

  return (
    <div className="new-ride">
      <h2>New Ride Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          type="text"
          name="name"
          placeholder="Ride Name"
        />
        <input
          value={newType}
          onChange={(e) => setNewType(e.target.value)}
          type="text"
          name="name"
          placeholder="Ride Type"
        />
        <input
          value={newParkLocation}
          onChange={(e) => setnewParkLocation(e.target.value)}
          type="text"
          name="name"
          placeholder="Ride Location"
        />
        <input
          value={newScary}
          onChange={(e) => setnewScary(e.target.value)}
          type="text"
          name="name"
          placeholder="Ride Scary?"
        />
        <input
          value={newSlow}
          onChange={(e) => setnewSlow(e.target.value)}
          type="text"
          name="name"
          placeholder="Ride Slow?"
        />
        <input
          value={newWater}
          onChange={(e) => setnewWater(e.target.value)}
          type="text"
          name="name"
          placeholder="Ride has water?"
        />
        <input
          value={newHeightRequirement}
          onChange={(e) => setnewHeightRequirement(e.target.value)}
          type="text"
          name="name"
          placeholder="Height Requirement"
        />
        <input
          value={newRideDuration}
          onChange={(e) => setnewRideDuration(e.target.value)}
          type="text"
          name="name"
          placeholder="Ride Duration"
        />
        <input
          value={newImage}
          onChange={(e) => setnewImage(e.target.value)}
          type="text"
          name="name"
          placeholder="Ride Image"
        />
        <input
          value={newComments}
          onChange={(e) => setnewComments(e.target.value)}
          type="text"
          name="name"
          placeholder="Ride Comments"
        />

        <button type="submit">Add Ride</button>
      </form>
    </div>
  );
}

export default NewRideForm;

// key = {ride.Ride_name}
// name = {ride.Ride_name}
// type = {ride.Ride_type_all}
// parkLocation = {ride.Park_location}
// scary = {ride.Ride_type_scary}
// slow = {ride.Ride_type_slow}
// water = {ride.Ride_type_water}
// heightRequirement = {ride.Height_req_inches}
// rideDuration = {ride.Ride_duration_min}
// image = {ride.Image}
// comments={ride.Comments}
