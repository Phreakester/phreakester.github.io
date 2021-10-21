import './../styles/index.css'

import Header from './shared/Header.js';

function Organizations() {
    return(
        <div className='general-wrapper'>
            <Header />
            <div className='organization-wrapper'>
                <div className='organization-card'>
                    <div className='organization-title'>ACM teachLA</div>
                    <div className='organization-role'>Project Manager</div>
                    <div className='organization-explanation'>
                        ACM teachLA aims to provide quality computer science education to students
                        in underserved communities throughout Los Angeles. I currently participate as
                        the Project Manager for a website to teach students about recurrent neural networks.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Organizations;