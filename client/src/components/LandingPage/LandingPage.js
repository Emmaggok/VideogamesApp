import "./LandingPage.css"
import React from "react";
import { NavLink } from "react-router-dom";
import Joystick from "../../img/Joystick.png";


const LandingPage = () => {
    return (
        <div className="landing">

            <NavLink to="/home" > <img className="logo" src={Joystick} alt="to home"/> </NavLink>
        </div>
    )
}

export default LandingPage;