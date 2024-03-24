import React from "react";

export default function NavBar() {
  return (
    <div className="nav--">
        <div className="nav--box">
    <a href="">  <h2 className="start">Start BootStrap</h2></a>
      <ol>
        <a href="#">
          {" "}
          <li>Home</li>
        </a>
        <a href="#">
          {" "}
          <li>About</li>
        </a>
        <a href="#">
          {" "}
          <li>Sample Post</li>
        </a>
        <a href="#">
          {" "}
          <li> Contact</li>
        </a>
      </ol>
    </div>
    </div>
  );
}
