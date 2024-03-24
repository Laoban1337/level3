import React from "react";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="header--">
      <NavBar />
      <h3 className="header--title">Clean Blog</h3>
      <p className="header--intro" >A blog Theme by Start Bootstrap</p>
    </div>
  );
}
