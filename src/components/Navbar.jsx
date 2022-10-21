import React from "react";
import logo from "../assets/travel-logo.png"


export default function Navbar() {
    return(
        <nav>
            <div className="nav">
                <img src={logo} className="nav-logo"/>
                <p>my travel journal.</p>
            </div>
        </nav>
    )
}