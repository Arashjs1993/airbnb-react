import React from "react";
import herosImg from ".././images/Group 77.png";

export default function Hero () {
    return (
        <div className="heros-section">
            <img src={herosImg}/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div> 
    );
}