import React from "react";
import disney from "../assets/disney.png";

function Header() {
    return (
    <div>
        <img src={disney} alt="DisneyWorld" id="main-header" />
    </div>
    );
};

export default Header;