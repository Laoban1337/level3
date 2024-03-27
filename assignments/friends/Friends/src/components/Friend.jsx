import React from "react";

export default function Friend(props) {
  return (
    <div className="friend-box">
      <h1 className="friend-name">  {props.element.name}</h1>
      <p className="friend-age">Friends age:{props.element.age}</p>
      <p className="friend-pet">
       {props.element.pets.name} {props.element.pets.breed}
      </p>
    </div>
  );
}
