import React, { useState } from "react";
function MyColorPicker() {
  const [colorOne, setColorOne] = useState("#FFFF00");
  const [colorTwo, setColorTwo] = useState("#000000");
  const [degrees, setDegrees] = useState(0);
  // Define the linear gradient style
  const style = {
    background: `linear-gradient(${degrees}deg, ${colorOne}, ${colorTwo} `,
  };
  // Define the linear gradient code
  const gradientCode = `linear-gradient(${degrees}deg, ${colorOne}, ${colorTwo}  )`;
  return (
    <div className="gradient-container">
      <div
        className="gradient-preview"
        style={style} // Apply the style object
      ></div>
      <div className="color-inputs">
        <label>Color 1:</label>
        <input
          type="color"
          value={colorOne}
          onChange={(e) => setColorOne(e.target.value)}
        />
        <label>Color 2:</label>
        <input
          type="color"
          value={colorTwo}
          onChange={(e) => setColorTwo(e.target.value)}
        />
      </div>
      <div className="angle-input">
        <label>Angle:</label>
        <input
          type="range"
          min="0"
          max="360"
          value={degrees}
          onChange={(e) => setDegrees(e.target.value)}
        />
        <span>{degrees}&deg;</span>
      </div>
      <textarea readOnly value={gradientCode} rows={4} cols={40} />
    </div>
  );
}
export default MyColorPicker;
