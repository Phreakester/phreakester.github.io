import { Link } from "react-router-dom";

import './../styles/index.css'
import './../styles/Projects.css'

import Header from "./shared/Header"

import bee_pic from './../assets/BeeBlocks/bee.png'
import { useState } from "react";

const project_dict = {
    'BeeBlocks' : {
        'description':'BeeBlocks',
        'img_src':bee_pic,
        'img_alt':'this is not a picture',
        'path':'/projects/beeblocks'
    },
    'MIDI Keyboard' : {
        'description':'MIDI Keyboard',
        'path':'/projects/midikeyboard'
    },
    'Quantum Computer Simulator' : {
        'description':'THE CARD FLIP THINGY IS NEAT',
        'path':'/projects/quantumsim'
    }
}

function Project(props) {
    const [isFlipped, setIsFlipped] = useState(false); 
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

function Projects() {
    return(
        <div className='general-wrapper'>
            <Header />
            <div className="projects-wrapper">
                {Object.keys(project_dict).map((project_name) => 
                    <Project dict={project_dict[project_name]}/>
                )

                }
            </div>
        </div>
    );
}

export default Projects;