import { Link } from "react-router-dom";

import './../styles/index.css'
import './../styles/Projects.css'

import Header from "./shared/Header"

const project_dict = {
    'BeeBlocks' : {
        'description':'bleh bleh bleh',
        'img_src':'idk',
        'img_alt':'this is not a picture',
        'path':'/projects/beeblocks'
    },
    'MIDI Keyboard' : {
        'description':'bleh blh bleh',
        'img_src':'ik',
        'img_alt':'this is a picture',
        'path':'/projects/midikeyboard'
    }
}

function Project(props) {
    return(
    <Link to={props.path}>
        <div className='project-card'>
            {props.img_src && <img src={props.img_src} alt={props.img_alt}/>}
            {props.description && <div className='project-description'>
                {props.description}
            </div>}
        </div>
    </Link>
    );
}

function Projects() {
    return(
        <div className='general-wrapper'>
            <Header />
            <div className="projects-container">
                {Object.keys(project_dict).map((project_name) => 
                    <Project description={project_dict[project_name]['img_alt']}/>
                )

                }
            </div>
        </div>
    );
}

export default Projects;