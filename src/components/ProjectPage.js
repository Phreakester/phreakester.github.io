import Header from './shared/Header'

import './../styles/index.css'

function ProjectPage(props) {
    const project_dict = props.dict;
    return(
        <div className='general-wrapper'>
            <Header />
            <div className='ppage-wrapper'>
                {project_dict.description}
            </div>
        </div>
    )
}

export default ProjectPage;