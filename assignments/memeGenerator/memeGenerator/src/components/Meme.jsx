import React,{useState} from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImg, setMemeImg] = useState("https://i.imgflip.com/46e43q.png");

  function handleClick(e) {
    e.preventDefault();
    console.log("I was clicked");

    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImg(memesArray[randomNumber].url);
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
        <div className="img-container">
          <img src={memeImg} alt="random meme image" className="meme-img" />
        </div>
        
      </form>
    </div>
  );
}
