import React from "react"
// import logo from "../../public/images/airbnb-logo.png"


export default function Navbar() {
    return (
        <nav>
            <div className="nav-info">
                <img src='images/world.png' className="nav--logo" />
                <h1 className="nav-title">my travel journal.</h1>
            </div>
        </nav>
    )
}