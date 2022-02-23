import { Link } from "react-router-dom";

import './../../styles/ProjectPage.css';

import cardboard_pic from './cardboard_version.jpg';
import cad_render from './cad.jpg';
import electronics_pic from './electronics.jpg';

import ProjectHeader from "../../components/shared/ProjectHeader";

function TreasureTracker() {
    return(
        <div className="ppage-body">
            <ProjectHeader title='Treasure Tracker' />
            <p>
                Treasure Tracker is a device that was created in a team of five during the IdeaHacks hardware hackathon.
                The device was inspired by the compass seen in the Pirates of the Caribbean movie series, which would point
                towards one's goals instead of north. Our compass is able to save a user's location, and point them back to it from
                anywhere on the globe. In addition, it is able to store and track up to four different locations simultaneously, 
                and switch between them on the fly.
            </p>
            <img src={cardboard_pic} className='ppage-img' />
            <p>
                The device uses several components, including an accelerometer, magnetometer, and a GPS module. First, the GPS module will
                compare the user's current location with the one stored in the Arduino Nano. It will then calculate the direction the stored
                point will be in. The magnetometer detects the Earth's magnetic field, which it uses in conjuction with the GPS calculations
                to point in the correct direction. The readout of the compass is achieved by using a servo connected to a gear train to rotate
                the compass face with a painted on arrow.
            </p>
            <img src={electronics_pic} className='ppage-img' />
            <p>
                I helped primarily with the housing for the entire device, but also worked on the electrical design as well as the writeup
                and final presentation. The container was designed to be very similar to the one seen in the movie, but ours had the added
                constraint of having to be able to store our electrical components. We were able to get the device into a small envelope
                while not making it too difficult to assemble. In addition, I designed the lid with a print-in-place hinge mechanism, making
                it easier to 3D print and requiring no additional assembly. Unfortunately, the hackathon experienced some problems with the
                3D printing and were unable to print my CAD designs. However, we were able to create a temporary cardboard box for the judging 
                and I included some renders of the CAD to show what the project would have looked like in the 3D printed enclosure.
            </p>
            <img src={cad_render} className='ppage-img' />
            <p>
                When designing the device, I knew that the print time of the enclosure had to be able to print before the judging began. Even
                though we were unable to print it, I was still proud of the effort I put in to make sure that we wouldn't have any headaches 
                during the 3D printing process. I also wrote the majority of the writeup for the project on devpost which gave me more practice 
                on pitching a product or design to judges.
            </p>
            <p>
                The devpost with the writeup and presentation can be found <a href='https://devpost.com/software/pirate-compass' target="_blank" rel="noopener noreferrer">here.</a>
            </p>
            <p>
                A rather goofy video of my teammates showing off the device can be found embedded below:
            </p>
            <iframe className='ppage-yt' src="https://www.youtube.com/embed/J1GFBCbM9qY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Link to="/projects">Back to Projects</Link>
        </div>
    );
}

export default TreasureTracker;