import React from "react";
import { Link } from "react-router-dom";

function About() {
    return(
        <div>
            <div id="AboutPage">

            </div>
            <div id="LandingPage">
                <div id="TripticContainer">
                    <Link to="/booking">
                        <div id="AboutToBooking"
                        ></div>
                    </Link>
                    <Link to="/">
                        <div id="AboutToLanding"
                        ></div>
                    </Link>
                    <Link to="/reviews">
                        <div id="AboutToReviews"
                        ></div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About