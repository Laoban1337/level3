import React from "react";

export default function ProfessionalDj(props) {
  function leftClick() {
    if (props.color[2] === "white" || props.color[2] === "black") {
      const newColor = [...props.color];
      newColor[2] = "blue";
      props.setColor(newColor);
    }
  }

  function rightClick() {  if (props.color[3] === "white" || props.color[3] === "black") {
    const newColor = [...props.color];
    newColor[3] = "blue";
    props.setColor(newColor);
  }}

  return (
    <div>
      <button className="button" onClick={leftClick}>
        Left Blue
      </button>
      <button className="button" onClick={rightClick}>
        right Blue
      </button>
    </div>
  );
}
