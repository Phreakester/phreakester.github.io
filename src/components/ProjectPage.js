import Header from './shared/Header'

import './../styles/index.css'
import './../styles/ProjectPage.css'

function ProjectPage(props) {
    const project_dict = props.dict;
    return(
        <div className='general-wrapper'>
            <Header />
            <div className='ppage-wrapper'>
                {/*If there is a specified page component, render that. If not, render just the plaintext explanation*/}
                {project_dict.page ? <project_dict.page /> : 
                <div className='ppage-body'> {project_dict.pagetext} </div>}
            </div>
        </div>
    )
}

export default ProjectPage;