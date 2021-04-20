import { Link } from "react-router-dom";

import './../styles/index.css'
import './../styles/Projects.css'

import Header from "./shared/Header"

function Project(props) {
    const description = props.dict['description'];
    const img_src = props.dict['img_src'];
    const img_alt = props.dict['img_alt'];
    const path = props.dict['path'];
    console.log(description);
    return(
    <Link to={path} className='project-link'>
        <div className='project-card'>
            {img_src && <img src={img_src} alt={img_alt} className='project-img'/>}
            {description && <div className='project-description'>
                {description}
            </div>}
        </div>
    </Link>
    );
}

function Projects(props) {
    const project_dict = props.dict;
    return(
        <div className='general-wrapper'>
            <Header />
            <div className="projects-wrapper">
                {Object.keys(project_dict).map((project_name) => 
                    <Project dict={project_dict[project_name]}/>
                )}
            </div>
        </div>
    );
}

export default Projects;