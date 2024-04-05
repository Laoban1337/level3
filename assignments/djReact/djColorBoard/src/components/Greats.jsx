import React from "react";

export default function Greats(props) {
  function Sounds() {
    playSounds();
    const newTiles = [...props.color]
    newTiles[0] ="black"
    newTiles[1] ="red"
    newTiles[2] ="blue"
    newTiles[3] ="black"
  props.setColor(newTiles)
  }

  function playSounds() {
    const sounds = new Audio("/blip.wav");
    sounds.play();
  }
  return (
    <button className="button" onClick={Sounds}>
      Make Noise
    </button>
  );
}
