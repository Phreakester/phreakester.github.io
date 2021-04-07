import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import "./../../styles/Header.css"

function Header() {
  let gradients = [
    "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)", 
    "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)", 
    "linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%)",
    "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
    "linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%)"
  ];
  const gradient = gradients[Math.floor(Math.random() * gradients.length)];
  console.log(gradient);
  var css_body = document.querySelector("body");
  css_body.style.setProperty("--gradient", gradient)
  return(
    <div className="Header-Container">
      <Link to="/" className="header-text"><b>Getty George V</b></Link>
    </div>
  );
}

export default Header;