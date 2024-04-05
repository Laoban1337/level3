import React from "react";

export default function BigDjOne(props) {
  function DjButton1() {
    if (
      props.color[0] === "blue" ||
      props.color[0] === "white" ||
      props.color[0] === "black" ||
      props.color[0] === "purple"
    ) {
      const newBlue = [...props.color];
      newBlue[0] = "green";

      props.setColor(newBlue);
    }
  }
  function DjButton2() {  if (
    props.color[1] === "blue" ||
    props.color[1] === "white" ||
    props.color[1] === "black"||
    props.color[1] === "purple"
  ) {
    const limeGreen = [...props.color];
    limeGreen[1] = "#BED754";

    props.setColor(limeGreen);
  }}
  function DjButton3() {  if (
    props.color[2] === "blue" ||
    props.color[2] === "white" ||
    props.color[2] === "black"
  ) {
    const newRed = [...props.color];
    newRed[2] = "red";

    props.setColor(newRed);
  }}
  function DjButton4() {  if (
    props.color[3] === "blue" ||
    props.color[3] === "white" ||
    props.color[3] === "black"
  ) {
    const newColor2 = [...props.color];
   newColor2[3] = "Yellow";

    props.setColor(newColor2);
  }}

  return (
    <div>
      <button className="button" onClick={DjButton1}>
        Big DJ one
      </button>
      <button className="button" onClick={DjButton2}>
        Big DJ two
      </button>
      <button className="button" onClick={DjButton3}>
        Big DJ three
      </button>
      <button className="button" onClick={DjButton4}>
        Big DJ four
      </button>
    </div>
  );
}
