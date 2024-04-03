import React, { useState } from "react";

export default function DiceBox() {
  const [numbers, setNumbers] = useState([1, 5, 4, 3, 2]);

  const rollDice = () => {
    const newNumbers = Array.from(
      { length: 5 },
      () => Math.floor(Math.random() * 6) + 1
    );
    setNumbers(newNumbers);
    console.log(newNumbers);
  };

  return (
    <div>
      <ul>
        <div className="centered">
          {numbers.map((number, index) => {
            return <li key={index}>{number}</li>;
          })}
          <button className="dice-roller" onClick={rollDice}>
            Roll Dice
          </button>
        </div>
      </ul>
    </div>
  );
}
