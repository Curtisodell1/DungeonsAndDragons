import React from "react";
import { Link } from "react-router-dom";

function Landing() {
    const handleMouseover = (e) => {
        console.log(e.target.id)
    }

    return(
        <div id="LandingPage">
            <div id="TripticContainer">
                <Link to="/booking">
                    <div id="LandingToBooking"
                    onMouseOver={handleMouseover}
                    ></div>
                </Link>
                <Link to="/about">
                    <div id="LandingToAbout"
                    onMouseOver={handleMouseover}
                    ></div>
                </Link>
                <Link to="/reviews">
                    <div id="LandingToReviews"
                    onMouseOver={handleMouseover}
                    ></div>
                </Link>
            </div>
        </div>
    )
}

export default Landing