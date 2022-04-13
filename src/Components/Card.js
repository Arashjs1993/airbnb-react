import React from "react";
import star from ".././images/Star 1.png";

export default function Card(props) {
    /*I can use `` in img src becuase 
    I use javascript inside{}*/

    /*props is an object containing
    all the data we passed from the
    App.js as the property of the
    Card component */

    /*Using $ inside `` in javascript
    we can insert a javascript value in string */
    return(
        <div>
            <div className="card-section">
                <img src={require(`../images/${props.img}`)}/>
                <div>
                    <img src={star}/>
                    <span>{props.rating}</span>
                    <span className="gray">({props.reviewCount})</span>
                    <span className="gray">{props.country}</span>
                </div>
                <div>{props.title}</div>
                <div><span className="bold">From ${props.price}</span> / person</div>
            </div>
        </div>
        
        
    );
}