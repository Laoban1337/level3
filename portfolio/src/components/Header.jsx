import React from "react";

function Header() {
  return (
    <div>
      {/* Header */}
      <header id="header" className="alt">
        <span className="logo">
          <img src="hbc3.jpg" alt="" className="intro-img" />
        </span>
        <h1>Brian Monestime</h1>
        <p>Dedicated, Motivated, Knowledge Seeker!</p>
        <a href="https://github.com/Laoban1337/">
          {" "}
          <img src="./gitIcon.png" alt="github icon" className="Links" />
        </a>
        <a href="https://www.linkedin.com/in/bmonestime-596424103/">
          {" "}
          <img src="./linkedin.png" alt="github icon" className="Links" />
        </a>
      </header>

      {/* Nav */}
      <nav id="nav">
        <ul>
          <li>
            <a href="#intro" className="active">
              Introduction
            </a>
          </li>
          <li>
            <a href="#first">Passion Projects</a>
          </li>
          <li>
            <a href="#second">About</a>
          </li>
          <li>
            <a href="#cta">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
