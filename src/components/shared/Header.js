import React from 'react';
import { Link } from "react-router-dom";
import "./../../styles/Header.css"

function Header() {
  return(
    <div className="Header-Container">
      <Link to="/" className="header-text"><b>Getty George V</b></Link>
    </div>
  );
}

export default Header;