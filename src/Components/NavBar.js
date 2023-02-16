import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
    <header>
        <span>
            <h3>
                <Link to="/home" className="nav-link">
                    Home
                </Link>
            </h3>

            <h3>
                <Link to="/rides" className="nav-link">
                    Rides
                </Link>
            </h3>

            <h3>
                <Link to="/filter" className="nav-link">
                    Filter
                </Link>
            </h3>
        </span>

    </header>
    );
};

export default NavBar;