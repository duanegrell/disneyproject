import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <Link to="/home">
            <button className="NavBarButton">Home</button>
          </Link>
        </li>
        <li>
          <Link to="/rides">
          <button className="NavBarButton">Rides</button>
          </Link>
        </li>
        <li>
          <Link to="/filter">
          <button className="NavBarButton">Filter</button>
          </Link>
        </li>
        <li>
          <Link to="/newrideform">
          <button className="NavBarButton">Add Ride</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;