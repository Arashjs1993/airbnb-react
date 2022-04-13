import React from "react";
import airbnb from ".././images/airbnb 1.png";

export default function Header(){
    return(
        <header className="header">
            <img className="header-logo" src={airbnb}/>
            <h1>Hello</h1>
        </header>
    );
}