import React from "react";

export default function Card(props) {
    /*I can use `` in img src becuase 
    I use javascript inside{}*/

    /*props is an object containing
    all the data we passed from the
    App.js as the property of the
    Card component */

    /*Using $ inside `` in javascript
    we can insert a javascript value in string */
    console.log(props)
    let badgeText
    if(props.item.openSpot === 0){
        badgeText = "SOLD OUT"
    } else if (props.item.location === "online"){
        badgeText = "Online"
    }
    return(
        <div>
            <div className="card">
                <img src={window.location.origin +`/images/${props.item.img}`}/>
                <div>
                    {/*Conditional rendering using JS*/}
                    {badgeText && <div className="card-badge">{badgeText}</div>}
                    <img src={window.location.origin +"/images/Star 1.png"}/>
                    <span>{props.rating}</span>
                    <span className="gray">({props.item.reviewCount})</span>
                    <span className="gray">{props.item.country}</span>
                </div>
                <div className="card-title">{props.item.title}</div>
                <div><span className="bold">From ${props.item.price}</span> / person</div>
            </div>
        </div>
        
        
    );
}