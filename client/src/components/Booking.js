import React from "react";
import { Link } from "react-router-dom";

function Booking() {
    return(
        <div id="LandingPage">
            <div id="TripticContainer">
                <Link to="/">
                    <div id="BookingToLanding"
                    ></div>
                </Link>
                <Link to="/about">
                    <div id="BookingToAbout"
                    ></div>
                </Link>
                <Link to="/reviews">
                    <div id="BookingToReviews"
                    ></div>
                </Link>
            </div>
        </div>
    )
}

export default Booking