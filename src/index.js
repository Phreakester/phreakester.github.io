import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from 'react-dom';

import './styles/index.css';

import Home from './components/Home';
import Projects from './components/Projects'
import ProjectPage from './components/ProjectPage'
import Resume from './components/Resume'
import AboutMe from './components/AboutMe'

import reportWebVitals from './reportWebVitals';



import project_dict from './assets/projects_data'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {Object.keys(project_dict).map((project_name) => 
          <Route path={project_dict[project_name]['path']} >
            <ProjectPage dict={project_dict[project_name]} />
          </Route>
        )}
        <Route path="/projects">
          <Projects dict={project_dict} />
        </Route>
        <Route path="/about-me">
          <AboutMe />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
