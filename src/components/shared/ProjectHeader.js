import { Link } from "react-router-dom";

import './../../styles/ProjectHeader.css'
import './../../styles/index.css'

function ProjectHeader(props) {
    return(
    <div className='project-header-wrapper'>
        <h1>{props.title}</h1>
        <Link to="/projects">Back to projects </Link>
    </div>
    )
}

export default ProjectHeader;