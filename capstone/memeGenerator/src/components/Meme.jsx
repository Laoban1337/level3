import React, { useState } from "react";
import axios from "axios";

export default function Meme() {
  const [responseData, setResponseData] = useState(null);
  //state for saving and deleting the memes
  const [savedMemes, setSavedMemes] = useState([]);
  //setting a loading state
  //   const [loading, setLoading] = useState(true);

  const fetchMemeData = async () => {
    try {
      //   setLoading(true);
      const response = await axios.get("https://api.imgflip.com/get_memes");
      setResponseData(response.data.memes);
    } catch (error) {
      console.log("There was an error fetching your meme data: " + error);
    } //  finally {
    //   // After fetching memes, set loading state to false
    //   setLoading(false);
    // }
  };

  function onChange(event) {
    const { name, value } = event.target;
    setResponseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleClick(event) {
    event.preventDefault();
    const arrayOfMemes = responseData;
    const randomNumber = Math.floor(Math.random() * arrayOfMemes.length);
    const url = arrayOfMemes[randomNumber].url;

    setResponseData((prevData) => ({ ...prevData, url: url }));
  }

  return (
    <div className="main">
      <form action="" className="form" onSubmit={handleClick}>
        <input
          type="text"
          placeholder="topText"
          className="topText"
          name="topText"
        />
        <br />
        <input
          type="text"
          placeholder="bottomText"
          className="bottomText"
          name="bottomText"
        />
        <br />
        <button className="form--button">Generate Meme</button>
        <div className="meme">
          <div className="img-container">
            <img src={url} alt="random meme image" className="meme-img" />
          </div>
        </div>
      </form>
    </div>
  );
}
