import axios from "axios";
import { useState, useEffect } from "react";

export default function RandomColor() {
    const [randomColor, setRandomColor] = useState("");
    const [count, setCount] =useState(1)
  useEffect(() => {
    const getRandomColor = async () => {
      try {
        const resonpnse = await axios.get(
          "https://random-color.onrender.com/colors/random"
        );
        setRandomColor(resonpnse.data.hex);
      } catch (error) {
        console.error("Error fetching random color:", error);
      }
    };
    getRandomColor();
  }, [count]);

 
  return (
    <div
      style={{ backgroundColor: randomColor, width: "200px", height: "200px" }}
    >
      <button onClick={()=>setCount(count+1)}>Get random color</button>

    </div>
    
  );
}
