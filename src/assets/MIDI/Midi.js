import { Link } from 'react-router-dom';

import './../../styles/ProjectPage.css'

import arduino_pic from './arduino.jpg';
import multimeter_pic from './multimeter.jpg';
import dissassembly_pic from './init-disassebmly.jpg';
import overall_pic from './overall.jpg';

import ProjectHeader from "../../components/shared/ProjectHeader";

function Midi(){
    return(
        <div className='ppage-body'>
            <ProjectHeader title='MIDI-ifying a Keyboard' />
            <p>
                An essential piece of equipment for producing electronic music is a keyboard. It is a tried-and-true
                method of going from idea to sound with very little friction. As I tried to learn a bit about 
                electronic music production over quarintine, I wanted to get my hands on one. However, I quickly
                found that any keyboard that would be able to interface with my software would be much more expensive
                than I could justify.
            </p>
            <p>
                I did however have an old electronic keyboard my mom used to use, but it had no ouput besides its 
                built in speakers. The actual keyboard and other parts still worked well enough however, so 
                I looked into adding a MIDI interface to it. From my initial disassembly of the leybpard, I saw
                that the keyboard connected the keys to the motherboard using a rather large ribbon cable.
            </p>
            <img src={dissassembly_pic} className='ppage-img' />
            <p>
                The problem was that I didn't understand how the cable could encode all the keys in only 16 wires
                given how many keys the keyboard had. Further research suggested that the keys used a scanning
                matrix structure, which would allow the cable to encode the keys in only 16 wires. Figuring this out
                proved to be the hardest part of the project as there wasn't any documentation form the keyboard.
                I sat down with a multimeter and tested different configurations until I finally recognized the pattern.
            </p>
            <img src={multimeter_pic} className='ppage-img-small' />
            <p>
                In this case, setting 
                one of the first 8 wires to ground would set the last 8 wires to measure a specific group of 8 keys.
                As you changed which of the first wires is pulled low, the last 8 wires would change to measure a
                different group of 8 keys. If you quickly cycle through the first 8 wires and record the last 8 wires
                at each step, you effectively measure all of the keys.
            </p>
            <p>
                From there, it was a matter of programming the arduino to cycle through the possible states and store the
                values. The data was then converted to MIDI using an arduino library and sent to the computer over USB.
                This was very effective, and the keyboard was immediately recognizable as a MIDI device and was compatible
                with the software I was using.
            </p>
            <img src={arduino_pic} className='ppage-img' />
            <p>
                I definitely learned a lot about how to try and reverse-engineer something to figure out how it works. I also
                got much better at researching the solution first to see if other people had a solution to a similar issue.
                I was extremely happy with the result, and was able to jam the rest of the summer.
                P.S. At some point over the summer I started to solder it as a more permanent solution (and because I needed
                the breadboard) but was unable to finish before moving out. But I do plan to get to it when I get back!
            </p>
            <img src={overall_pic} className='ppage-img' />
            <p>
                You can view my engineering log <a href='https://docs.google.com/document/d/1AEdCtj05S_62yVM4uCP1frEDqP516q3c7s-NvJpETag/edit?usp=sharing'>here</a>.
            </p>
            <p>
                <Link to="/projects">Back to Projects</Link>
            </p>
        </div>
    )
}
export default Midi;