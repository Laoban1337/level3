import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cardElements = data.map((element) => {
    return (
      <Card
      //needed because of .map()
        key={element.id}
        element={element}
        //element ={element} = passing in the whole data object using props in the card component
        // title={element.title}
        // img={element.coverImg}
        // rating={element.stats.rating}
        // people={element.stats.reviewCount}
        // location={element.location}
        // price = {element.price}
        // openSpots = {element.openSpots}
      />
    );
  });

  return (
    <>
      <NavBar />

      <Hero />
      <section>{cardElements}</section>
    </>
  );
}

export default App;
