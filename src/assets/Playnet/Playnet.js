import { Link } from 'react-router-dom';

import './../../styles/ProjectPage.css'
import './../../styles/index.css'

import playnet_landing from './landing.png'

import ProjectHeader from '../../components/shared/ProjectHeader';

function Playnet() {
    return(
        <div className='ppage-body'>
            <ProjectHeader title='Playnet' />
            <p>After spending some time training to use React, HTML, and CSS through ACM teachLA, I began to work on an actual project the organization was undertaking.
            TeachLA creates websites dubbed Learning Labs which are targeted to teach certain aspects of computer science to different types of students.
            The one I was involved in was named Playnet, and was focused on teaching elementary school children the basics of how the internet works.</p>
            <p>
                The project was done using React and Typescript, and hosted thorugh Github. It was my first real experience working collaboratively on a team,
                which intimidated me at first. There was already a significant amount of work done, so I had to go through the code to try and understand how
                each compenent was working together. It was also the first time I used TypeScript, and had to learn how to assign types correctly.
            </p>
            
            <p>
                Specifically, I worked on implementing the landing screen to present the user with a choice of different videos to watch. That choice is then
                used throughout the following animation, reflecting the choice made by the user. At the end of the intro, it finally plays the video they chose at the beginning.
                I also implemented the auto-play and voice over function which are available at most stages of the animation.
            </p>
            <img  src={playnet_landing} className='ppage-img'/>
            <p>
                I learned a lot on this project, both technically and in terms of working in a team. My comfort with React and CSS increased tremendously, in addtion to
                learning more than just the basic Github commands. Teamwork-wise, I learned how vital it is to maintain good communication as to the progress of my ticket
                and if I had any problems. Reviewing code was also useful practice to learn to evaluate other's code while also noting what others had to say about my code.
            </p>
            <p>
                The project can be found <a target="_blank" rel="noopener noreferrer" href="https://playnet.uclaacm.com/">here</a> and the github can be found <a target="_blank" rel="noopener noreferrer" href="https://github.com/uclaacm/Playnet">here</a>
            </p>
            <p>
                <Link to="/projects">Back to Projects</Link>
            </p>
        </div>
    );
}

export default Playnet;