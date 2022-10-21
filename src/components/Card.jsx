import React from "react";


export default function Card(props) {
    return(
        <div className="card">
            <div>
                <img src={props.imageUrl} className="card-img"/>
            </div>
            <div className="card-content">
                <div className="card-location">
                    <p>{props.location}</p>
                    <a href="{props.GoogleMapsLink}">View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p className="card-date" >{props.startDate} - {props.endDate}</p>
                <p className="card-description">{props.description}</p>
                <hr/>
            </div>
        </div>
    )
}