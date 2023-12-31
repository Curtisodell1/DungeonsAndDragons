import React from "react";
import About from "./About";
import Landing from "./Landing";
import Reviews from "./Reviews";
import Booking from "./Booking";
import Header from "./Header";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
    <Header/>
    <>
      <Route exact path="/">
        <Landing/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/reviews">
        <Reviews/>
      </Route>
      <Route path="/booking">
        <Booking/>
      </Route>    
    </>
    </Router>
)
}
export default App;
