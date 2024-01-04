import React from "react";
import { Link } from "react-router-dom";

function Header() {

    return(
        <div id="header">
            <div id="ButtonContainer">
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/booking">
                    <button> Booking </button>
                </Link>
                <Link to="/reviews">
                    <button> Reviews </button>
                </Link>
                <Link to="/about">
                    <button> About </button>
                </Link>
            </div>
        </div>
    )
}

export default Header