import React from "react";
import { Link } from "react-router-dom";

function Reviews() {
    return(
        <div id="LandingPage">
            <div id="TripticContainer">
                <Link to="/booking">
                    <div id="ReviewsToBooking"
                    ></div>
                </Link>
                <Link to="/about">
                    <div id="ReviewsToAbout"
                    ></div>
                </Link>
                <Link to="/">
                    <div id="ReviewsToLanding"
                    ></div>
                </Link>
            </div>
        </div>
    )
}

export default Reviews