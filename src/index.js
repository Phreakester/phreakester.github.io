import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom';

import './styles/index.css';

import Home from './components/Home';
import Projects from './components/Projects'
import ProjectPage from './components/ProjectPage'
import Resume from './components/Resume'
import Organizations from './components/Organizations'

import reportWebVitals from './reportWebVitals';

import project_dict from './assets/projects_data'
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
css_body.style.setProperty("--gradient", gradient);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {Object.keys(project_dict).map((project_name) => 
          <Route path={project_dict[project_name]['path']} element={<ProjectPage dict={project_dict[project_name]} />} />
        )}
        <Route path="/projects" element={<Projects dict={project_dict} />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/" element={<Home /> } />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
