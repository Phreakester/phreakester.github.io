import './../../styles/ProjectPage.css'
import './../../styles/index.css'

import ProjectHeader from './../../components/shared/ProjectHeader.js'

function BeeBlocksPage() {
    return (
        <div>
            <ProjectHeader title='Bee Blocks'/>
            <div className='ppage-body'>
                <p> Over a weekend in spring quarter, a couple friends and I participated in a design-a-thon! A design-a-thon is similar to a hack-a-thon,
                but specifically focuses of the aspects of design and ideation instead of the actual integration and development of the project
                that would normally happen during a hack-a-thon. This design-a-thon was hosted by Bruin Entreprneurs at UCLA and our prompt was
                how to accomodate a large increase in population density in Los Angeles without increasing its size.</p>
                <p> Our solution was to apply the urban design concept of superblocks to Los Angeles. Superblocks involve enveloping multiple
                city blocks into one larger one, redirecting traffic around it and reserving the middle roads for pedestrians. This creates
                more space for community green spaces and reduces noise pollution as citizens are further from the streets. Superblocks
                would also llow people easy access to local buisnesses such as grocers or barbers, reducing the need to drive and reducing congestion.</p>
                <p>I had a fantastic time competing in the design-a-thon, and I learned much about the design process, from ideation and brainstorming
                to pitching and presenting. Our entry earned honorable mention in the awards ceremony and each team member won a Bonsai Tree kit :).
                </p>
                <p> If you would like to read more about the project, the presentation we created can be found <a 
                href="https://docs.google.com/presentation/d/1yOINC_jJQQV65akMZLFP2bwIvDO9V3kMZJLUqs0RL-0/edit?usp=sharing"
                target="_blank" rel="noopener noreferrer">here.</a> </p>
                <p> The code for the website can be found <a
                href="https://github.com/Phreakester/beeblocks"target="_blank" rel="noopener noreferrer">here.</a></p>

            </div>
        </div>
    );
}
export default BeeBlocksPage;