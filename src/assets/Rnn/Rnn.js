import { Link } from "react-router-dom";

import ProjectHeader from "../../components/shared/ProjectHeader";

function Rnn(){
    return(
        <div className='ppage-body'>
            <ProjectHeader title='Teaching RNNs' />
            <p>
                As we <Link to='/projects/playnets'> finished our previous learning lab </Link> at the end of my first year, my teammates and I were looking
                forward to what the next project would be. The PM for that project came to us with a suggestion: 
                we could explore whatever topic we wanted with the learning lab if we formed our own development
                team. We thought it would be a worthwhile experience, so we agreed.
            </p>
            <p>
                We decided that the learning lab should be targeted towards college students and would look into
                recurrent neural networks, LSTMs, and transformers. We also decided to collaborate with the AI
                branch of ACM as they would be able to use our site in their classes.
                I took on the position of Project Manager, and am in charge of the scheduling, organization, and
                communication of the learning lab. We are still in the design phase, and are currently 
                working with a designer to visualize the website before we begin to implement our content.
            </p>
            <p>
                Some of the progress we have made so far can be found in our early design figma <a href='https://www.figma.com/file/lX9LTuE5eAonPW0qdnWmkH/Initial-Rough-Design-(Copy)' target="_blank" rel="noopener noreferrer"> here</a>, but please note that this project is still
                in early development and ill update this page as we continue to work on it.
            </p>
            <p>
                <Link to="/projects">Back to Projects</Link>
            </p>
        </div>
    )
}

export default Rnn;