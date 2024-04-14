import "./App.css";
import React, { useState } from "react";
import RandomColor from "../../randomColor/src/components/RandomColor";

function App() {
  //setting state
  const [formData, setFormData] = useState({
    input: "",
    namesList: [],
  });

  //submit event
  function handleClick(event) {
    event.preventDefault();
    setFormData((prevInfo) => ({
      ...prevInfo,
      namesList: [...prevInfo.namesList, formData.input],
    }));

    //logic to clear input after submit
    setFormData((prevInfo) => ({
      ...prevInfo,
      input: "",
    }));
  }

  // input on change
  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;

    setFormData((prevName) => {
      //spreading previous data into the object
      //event.target.name: event.target.value
      return { ...prevName, [name]: value };
    });
  }

  return (
    <div>
      <h1>{formData.input}</h1>
      <ol>
        {formData.namesList.map((data, index) => {
          return <li key={index}>{data}</li>;
        })}
      </ol>

      <input
        type="text"
        onChange={handleChange}
        name="input"
        value={formData.input}
      />
      <button onClick={handleClick}>Submit</button>
      <br></br>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
