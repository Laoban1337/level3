import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //#1 const [color, setColor] = useState("pink");
  // setColor("Blue");

  //#2 setColor(color === "pink" ? "blue" : "pink");

  //#3 const [people, setPeople] = useState([
  //   {
  //     firstName: "John",
  //     lastName: "Smith",
  //   },
  // ]);
  // const addPerson = () => {
  //   const newGuy = { firstName: "John", lastName: "Bilthweather", };
  //   setPeople((prevPerson) => [...prevPerson, newGuy]);
  //   console.log("MousedOver");
  //   console.log(people)
  // };

  // const displayPeeps = people.map((person, index) => {
  //   <p key={index}>
  //     {person.firstName} {person.lastName}
  //   </p>;
  // });

  const [colors, setColors] = setState(["pink", "blue"]);

  const colorSetter = () => {
    setColors(...prevColors, "green");
  };

  setColors((prevColors) => {
    return [...prevColors, "green"];
  });

  const [countObject, setCountObject] = setState({
    count: 0
  })

  const increment = ()=>setCountObject({...prevState,count:prevState +1})
  //add to onClick={increment}
    
  }
  
 // What’s wrong with the following state update?
  const [colors, setColors] = useState(["pink", "blue"])
  
  setColors("green")
  // never calls to previous state

  return (
    <>
      <p className="read-the-docs">{displayPeeps}</p>

      <h3>TEST</h3>
    </>
  );


export default App;
