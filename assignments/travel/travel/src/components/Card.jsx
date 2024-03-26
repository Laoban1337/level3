import React from "react";

export default function Card(props) {
  let sign;
  if (props.element.price <= 500) {
    sign = "$";
  } else if (props.element.price <= 1000) {
    sign = "$$";
  } else {
    sign = "$$$";
  }

  let bgColor;
  if (props.element.timeToGo === "Spring") {
    bgColor = "#008170";
  } else if (props.element.timeToGo === "Winter") {
    bgColor = "#46C2CB";
  } else if (props.element.timeToGo === "Fall") {
    bgColor = "Orange";
  } else {
    bgColor = "red";
  }
  return (
    <div className="cards" style={{ backgroundColor: bgColor }}>
      <h1 className="place">{props.element.place}</h1>
      <h2>
        Price of trip:<span className="priceSpan"> ${props.element.price}</span>{" "}
      </h2>
      <p className="depart">we depart in {props.element.timeToGo}</p>
      <img src={props.element.img} alt="" className="card--img" />
      <p className="sign">{sign}</p>
    </div>
  );
}
