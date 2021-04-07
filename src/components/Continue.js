import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import "./../styles/Continue.css"

function Continue() {
    return(
        <div className="continue-container">
            <Link to="/about-me" className="continue-button">About Me</Link>
            <Link to="/projects" className="continue-button">Projects</Link>
            <Link to="/resume" className="continue-button">Resume</Link>
        </div>
    )
}

export default Continue;