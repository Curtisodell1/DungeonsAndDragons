import React from "react";

function Landing() {
    const handleMouseover = (e) => {
        console.log(e.target.id)
    }

    return(
        <div id="LandingPage">
            <div id="TripticContainer">
                <div id="TripticOne"
                onMouseOver={handleMouseover}
                ></div>
                <div id="TripticTwo"
                onMouseOver={handleMouseover}
                ></div>
                <div id="TripticThree"
                onMouseOver={handleMouseover}
                ></div>
            </div>
        </div>
    )
}

export default Landing