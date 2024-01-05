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
                    <div id="TripticOne"
                    onMouseOver={handleMouseover}
                    ></div>
                </Link>
                <Link to="/about">
                    <div id="TripticTwo"
                    onMouseOver={handleMouseover}
                    ></div>
                </Link>
                <Link to="/reviews">
                    <div id="TripticThree"
                    onMouseOver={handleMouseover}
                    ></div>
                </Link>
            </div>
        </div>
    )
}

export default Landing