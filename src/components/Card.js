import React from "react"
// import star from "../../public/images/star.png"
// import bike from "../../public/images/bike.png"

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={`/images/${props.imageUrl}`} className="image"/>
            </div>

            <div className="card-info">
                <div className="card--stats">
                    <img src='/images/point.png' className="card-point" />
                    <span className="location">{props.location}</span>
                    <a className="map" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="card--about">
                    <h2 className="card-title">{props.title}</h2>
                    <div className="card-date">{props.startDate} - {props.endDate}</div>
                    <div className="card-text">{props.description}</div>
                </div>
            </div>
        </div>

    )
}