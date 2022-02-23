import { Link } from "react-router-dom";

import './../../styles/ProjectPage.css';



import ProjectHeader from "../../components/shared/ProjectHeader";

function BajaControls() {
    return(
        <div className='ppage-body'>
            <ProjectHeader title='Baja Controls'/>
            Hehe cool
            <Link to="/projects">Back to Projects</Link>
        </div>
    );
}

export default BajaControls;