import { useState, useEffect } from "react";
import Badge from "./components/Badge";
import CompletedBadge from "./components/CompletedBadge";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //set state object with corresponding name/ values
  // const [isCompleted, setIsCompleted] = useState(false);
  //no longer being used

  //setstate FormData with
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    placeOfBirth: "",
    phone: "",
    favoriteFood: "",
    aboutSelf: "",
  });
  //set a separate state for badges which is an array of objects

  const [badgeState, setBadgeState] = useState([]);

  //use badgeState.map(badge => {
  // return  <CompletedBadge data = {badge}/>
  //})

  // CompletedBadge(props)
  //return (
  //<h1>{props.firstName}</h1>
  //)

  //write onChange and onClick functions

  function onchange(event) {
    //destructure event  into name and value
    const { name, value } = event.target;

    //checking min length before submit
    // if (value.length >= 3 || value === "") {

      //
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      console.log(formData);
    // }
  }

  function handleOnClick(event) {
    event.preventDefault();
    console.log("Clicked");
    console.log(formData);

    // const newBadge = { ...formData };

    setBadgeState((prevData) => [...prevData, formData]);

    // clears out form on submit

   
    // const clearFormData = () => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        placeOfBirth: "",
        phone: "",
        favoriteFood: "",
        aboutSelf: "",
      });
      
      console.log("Attempted Clear");
    // };
    // clearFormData();
  }

  const displayBadges = badgeState.map((badge, index) => {
    console.log(badgeState);
    return <CompletedBadge data={badge} key={index} />;
  });

  //Upon submit, the badge fields should be cleared, and a new badge should be displayed below the badge form.

  //Each time the user submits a badge, each badge will be printed below the form in a list.

  //Specify input types to correspond with the required information.

  return (
    <>
      <Badge {...formData} onClick={handleOnClick} onChange={onchange} />
      {/* {isCompleted && (
        <CompletedBadge isCompleted={isCompleted} formData={formData} />
     )} */}

      {displayBadges}
    </>
  );
}

export default App;
