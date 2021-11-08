import { Link } from "react-router-dom";

import './../styles/Home.css';
import './../styles/index.css';

import Header from "./shared/Header.js";

function Home() {
  return (
    <div className="general-wrapper">
      <Header />
      <div className="intro-container">
        Hello! My name is Getty, and welcome to my personal website! Its a collection of some of my projects, and I hope you find at least some of them interesting!
      </div>
      <div className="continue-container">
        {/* <Link to="/organizations" className="continue-button">Organizations</Link> */}
        <Link to="/projects" className="continue-button">Projects</Link>
        <Link to="/resume" className="continue-button">Resume</Link>
      </div>
    </div>
  );
}

export default Home;
