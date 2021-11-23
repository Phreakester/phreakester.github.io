import { Link } from 'react-router-dom';

import './../../styles/index.css'
import './../../styles/ProjectFooter.css';

export default function ProjectFooter() {
    return(
        <div className='continue-button'>
            <Link to="/projects">Back to Projects</Link>
        </div>
    )
}