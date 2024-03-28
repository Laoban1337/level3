import React from "react";

export default function Meme() {
  function handleClick(e) {
    e.preventDefault();
    console.log("I was clicked");
  }
  return (
    <div className="main">
      <form action="" className="form">
        <input type="text" placeholder="top-text" className="top-text" />
        <br />
        <input type="text" placeholder="bottom-text" className="bottom-text" />
        <br />
        <button onClick={handleClick} className="form--button">
          Generate Meme
        </button>
      </form>
    </div>
  );
}
