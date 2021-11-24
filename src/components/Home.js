import { Link } from "react-router-dom";

import './../styles/Home.css';
import './../styles/index.css';

import Header from "./shared/Header.js";

import personal_pic from './../assets/me-cropped.jpg';
import linkedin_logo from './../assets/Social_Logos/linkedin.png';
import github_logo from './../assets/Social_Logos/github.png';

function Home() {
  return (
    <div className="general-wrapper">
      <Header />
      <div className="intro-container">
        Hello! My name is Getty, and welcome to my personal website! I use it mainly to display some of my favorite projects so be sure to check them out!
        
      </div>
      
      <div className="continue-container">
        {/* <Link to="/organizations" className="continue-button">Organizations</Link> */}
        <Link to="/projects" className="continue-button">Projects</Link>
        <Link to="/resume" className="continue-button">Resume</Link>
      </div>
      <div className='about-me'>
        <h1>About Me</h1>
        <div className='pic-wrapper'>
          <img src={personal_pic} className='personal-pic'/>
          <div className='about-me-text'>
            <p>
              I am a second year mechanical engineering student at UCLA. I participate in a number of
              different engineering clubs including the Association for Computing Machinery at UCLA and 
              the Bruin Racing team. I also like to get involved in other, non-technical organizations
              such as the UCLA Marching Band and the Themed Entertainment Association at UCLA.
            </p>
            <p>
              If you would like to learn more about some of the things I do, check out the projects page above
              or any of the links below.
            </p>
            <div className='social-wrapper'>
              <a className='social-link' href='https://github.com/Phreakester'>
                <img className='social-logo' src={github_logo}/>
              </a>
              <a className='social-link' href='https://www.linkedin.com/in/getty-george-v/'>
                <img className='social-logo' src={linkedin_logo}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
