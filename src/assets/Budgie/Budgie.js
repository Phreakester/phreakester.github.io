import { Link } from 'react-router-dom';

import ProjectHeader from '../../components/shared/ProjectHeader';

function Budgie() {
    return (
        <div className='ppage-body'>
            <ProjectHeader title='Budgie' />
            <p>
                <Link to="/projects">Back to Projects</Link>
            </p>
        </div>
    )
}

export default Budgie;