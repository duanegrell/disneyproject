import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
    <header>
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

export default NavBar;