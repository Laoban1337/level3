import React from "react";

export default function SmallTimeDj(props) {
  function handleClick() {
    if (props.color[0] === "white") {
      props.setColor(["black", "white", "white", "white"]);
    } else if (props.color[0] === "black") {
      props.setColor(["white", "black", "black", "black"]);
    }
    else if (props.color[0]==="purple" && props.color[1]==="purple"||props.color[0]==="green") {
        props.setColor(["black", "white", "white", "white"]);
    }


    // props.setColor((prevColor) =>
    //   prevColor[0] === "white"
    //     ? "black"
    //     : prevColor[0] === "black"
    //     ? "white"
    //     : "grey"
    // );
  }

  return <button className="button" onClick={handleClick}>Small time Dj</button>;
}
