import React from "react";
import { Link } from "react-router-dom";

function Reviews() {
    return(
        <div id="LandingPage">
            <div id="TripticContainer">
                <Link to="/booking">
                    <div id="BookingPath"
                    ></div>
                </Link>
                <Link to="/about">
                    <div id="TripticTwo"
                    ></div>
                </Link>
                <Link to="/">
                    <div id="TripticThree"
                    ></div>
                </Link>
            </div>
        </div>
    )
}

export default Reviews