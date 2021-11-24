import { Link } from 'react-router-dom';

import './../../styles/ProjectPage.css';

import render_pic from './budgie_render.png';

import ProjectHeader from '../../components/shared/ProjectHeader';

function Budgie() {
    return (
        <div className='ppage-body'>
            <ProjectHeader title='Budgie' />
            <p>
                Over the summer between my freshmen and sophomore year, I entered into the BruinLabs hackathon with some of my firends.
                We explored different product spaces that we thought we could execute well, and ended up narrowing it down to a 
                tool to teach rhythm to the user using a physical product.
            </p>
            <p>
                The project involved multiple different pieces: there was the physical product, the app, and the marketing which would all 
                be judged at the end. I was responsible for the design and fabrication of the physical product. I created it using
                Solidworks and went through a couple of iterations to create a deisgn that would be easy to grip as well as comfortable
                to hold. For the presentation, I prepared some renders from solidworks to add to the pitch deck as well.
            </p>
            <img src={render_pic} className='ppage-img' />
            <p>
                The project was interesting as I had to ensure that the housing would be able to fit and securely hold all of the
                essential electronics inside. I also had to learn how to work on a physical product collaboratively and ensure
                that all members were up to date on the progress being made.
            </p>
            <p>
                We presented the project with a pitch deck at the end of the summer and won honorable mention.
                The pitch deck can be found <a href='https://pitchdeck.figmatic.com/slides/ksbc38di07561?token=TkkrbjhZW2tvbUdWcGs='>here</a> and
                the demo of the working physical product is embedded below (and is in the pitch deck).
            </p>
            <iframe className='ppage-yt' src="https://www.youtube.com/embed/usup_jfuutA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>
                <Link to="/projects">Back to Projects</Link>
                
            </p>
        </div>
    )
}

export default Budgie;