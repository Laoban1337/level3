import React from "react";

export default function Card(props) {
let badgeText;
if(props.element.openSpots === 0){
    badgeText = "SOLD OUT"
}
else if(props.element.location ==="Online"){
    badgeText = "ONLINE"
}
  return (
    <div className=" Card">
      <a href="">
        <img src={props.element.coverImg} className="card-photo" />
      </a>
      {/* conditional rendering */}
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <div className="card-box">
        <h4 className=" card-rating">
          {props.element.stats.rating} ({props.element.stats.reviewCount}){" "}
          <span className=" card-location">{props.location}</span>
        </h4>
        <h3 className="card-title">{props.element.title}</h3>
        <h5 className="card-price">
          <span className="card-price-bold"> From ${props.element.price}</span>/ person
        </h5>
      </div>
    </div>
  );
}
