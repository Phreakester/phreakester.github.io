import { Document  } from 'react-pdf/dist/esm/entry.webpack';

import './../styles/index.css'
import './../styles/Resume.css'
import ResumeFile from './../assets/resume.pdf'
import ResumePic from './../assets/resume.png'

import Header from './shared/Header.js';

function Resume() {
    return (
        <div className='general-wrapper'>
            <Header />
            <div className='resume-wrapper'>
                <div className='resume-background'>
                    <img className = 'resume-img' src={ResumePic} alt='My Resume, for accessible access download as a pdf then use a pdf reader' />
                </div>
                <div className='resume-download'>
                    You can download my resume <a  href={ResumeFile} download="Getty_George_Resume.pdf">here</a>
                </div>
                {/* <Document file={ResumeFile} /> */}
            </div>
        </div>
    )
}
export default Resume;