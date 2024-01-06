import React from "react";
import { Link } from "react-router-dom";

function Booking() {
    return(
        <div id="LandingPage">
            <div id="TripticContainer">
                <Link to="/">
                    <div id="BookingPath"
                    ></div>
                </Link>
                <Link to="/about">
                    <div id="TripticTwo"
                    ></div>
                </Link>
                <Link to="/reviews">
                    <div id="TripticThree"
                    ></div>
                </Link>
            </div>
        </div>
    )
}

export default Booking