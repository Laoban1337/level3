import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
// import Meme from "./components/Meme";
import NewMeme from "./components/NewMeme";
import SavedMemes from "./components/SavedMemes";

function App() {
  //set meme state
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    id: uuidv4(),
  });
  const [savedMemes, setSavedMemes] = useState([]);
  const [allMemes, setAllMemes] = useState([]);

  function getMemeImage() {
    //using a random numnber that is the length of allmemes state(array)
    //we get a random meme img at the url chosen by the random number
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    //we then set the meme
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
      id: uuidv4(),
    }));
    clearInputs();
  }
  function clearInputs() {
    setMeme((prevMeme) => ({
      ...prevMeme,
      bottomText: "",
      topText: "",
      id: uuidv4(),
    }));
  }

  function saveMeme() {
    //saves the meme by setting the saved meme setter to pass in the enire saved meme state, and the meme with it's changes
    setSavedMemes([...savedMemes, meme]);

    setMeme((prevMeme) => {
      return { ...prevMeme, topText: "", bottomText: "", id: uuidv4() };
    });
  }

  function applyEdit(id, meme) {
    //we map over the item in the previous state, checking if the id matches if it does we return the new meme
    // if not then it leaves the item unchanged
    setSavedMemes((prevState) =>
      prevState.map((item) => (item.id === id ? meme : item))
    );
  }

  function handleChange(event) {
    //handles input change
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  // states

  function deleteMeme(id) {
    // filters through the saved memes return the meme that we not at the id chosen for deletion
    setSavedMemes((prevState) => prevState.filter((meme) => meme.id != id));
  }

  useEffect(() => {
    fetchMemeData();
  }, []);
  // fetching All meme data
  function fetchMemeData() {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((response) => setAllMemes(response.data.data.memes))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    console.log(savedMemes);
  }, [savedMemes]);

  return (
    <>
      <Header />
      <NewMeme
        meme={meme}
        getMemeImage={getMemeImage}
        handleChange={handleChange}
        saveMeme={saveMeme}
      />
      {/* <Meme /> */}
      <SavedMemes
        clearInputs={clearInputs}
        handleChange={handleChange}
        savedMemes={savedMemes}
        saveMeme={applyEdit}
        handleDelete={deleteMeme}
      />
    </>
  );
}

export default App;
