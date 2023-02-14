import React from "react";
import disney from "../assets/disney.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
    <header>
        <div>
            <img src={disney} alt="DisneyWorld" id="main-header" />
        </div>
        <span>
        <h3>
            <Link to="/">
                Home
            </Link>
        </h3>

        <h3>
            <Link to="/rides">
                Rides
            </Link>
        </h3>

        <h3>
            <Link to="/filter">
                Filter
            </Link>
        </h3>
        </span>

    </header>
    );
};

export default Header;