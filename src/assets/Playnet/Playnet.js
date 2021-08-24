import './../../styles/ProjectPage.css'
import './../../styles/index.css'

function Playnet() {
    return(
        <div className='ppage-body'>
            <p>After spending some time training to use React, HTML, and CSS through ACM teachLA, I began to work on an actual project the organization was undertaking.
            TeachLA creates websites dubbed Learning Labs which are targeted to teach certain aspects of computer science to different types of students.
            The one I was involved in was named Playnet, and was focused on teaching elementary school children the basics of how the internet works.</p>
            <p>
                The project was done using React and Typescript, and hosted thorugh Github. It was my first real experience working collaboratively on a team,
                so I learned how to use Pull Requests and how to review other's code. I also learned how to better read and understand other's code as well as
                how to increase the readability of my own code.
            </p>
            <p>
                The project can be found <a target="_blank" rel="noopener noreferrer" href="https://playnet.uclaacm.com/">here</a> and the github can be found <a target="_blank" rel="noopener noreferrer" href="https://github.com/uclaacm/Playnet">here</a>
            </p>
        </div>
    );
}

export default Playnet;