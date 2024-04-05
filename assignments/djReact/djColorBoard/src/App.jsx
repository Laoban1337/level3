import { useState } from "react";

import "./App.css";
import SmallTimeDj from "./components/SmallTimeDj";
import PartyDj from "./components/PartyDj";
import ProfessionalDj from "./components/ProfessionalDj";
import BigDjOne from "./components/BigDj";
import Greats from "./components/Greats";

function App() {
  const [color, setColor] = useState(["white", "white", "white", "white"]);

  const sqaures = () =>
    color.map((color, index) => {
      return (
        <div key={index} className="square-container">
          <div className="squares box" style={{ background: color }}></div>
        </div>
      );
    });



  return (
    <>
      {sqaures()}
      <SmallTimeDj color={color} setColor={setColor} />
      <PartyDj color={color} setColor={setColor} />
      <ProfessionalDj color={color} setColor={setColor} />
      <BigDjOne color={color} setColor={setColor} />
      <Greats  color={color} setColor={setColor} />
    </>
  );
}

export default App;
