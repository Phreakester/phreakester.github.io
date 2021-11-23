import { Link } from "react-router-dom";

import './../../styles/ProjectHeader.css'
import './../../styles/index.css'

export default function ProjectHeader(props) {
    return(
    <div className='project-header-wrapper'>
        <h1>{props.title}</h1>
        <Link to="/projects"><div className='return'>Back to projects</div> </Link>
    </div>
    )
}