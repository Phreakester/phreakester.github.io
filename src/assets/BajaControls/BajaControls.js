import { Link } from "react-router-dom";

import './../../styles/ProjectPage.css';

import baja_pic from './baja_car.png';
import wiring_pic from './wiring_pic.jpg';
import me_pic from './me_in_car.jpg';

import ProjectHeader from "../../components/shared/ProjectHeader";

function BajaControls() {
    return(
        <div className='ppage-body'>
            <ProjectHeader title='Baja Controls'/>
            <p>
                I am a member of the racing team on campus, and I work on the Baja offroad vehicle.
                More specifically, I work on the transmission for the vehicle. The transmission is an electronically controlled variable transmission (ECVT)
                and offers precise control of the ratio of the transmission. As opposed to a normal geared transmission you would find on a car, the ECVT doesn't have discrete gears
                like first or second gear. Instead, it can change its mechanical advantage to be any value within a certain range, allowing for more precise control.
                The ECVT is actuated by a motor controlled by a Teensy microcontroller, which determines what the ratio should be using a PD controller.
            </p>
            <img src={baja_pic} alt='Offroad vehicle on a dusty track' className="ppage-img"/>
            <p>
                Within the ECVT team, I have worked on the main code for the microcontroller, including the main control loop, diagnostic functions, and logging. The system
                is able to be set to different logging and diagnostic modes at startup, allowing us to collect as much or as little data as we want for each run. The logging 
                is saved as a csv to a microSD card attached to the Teensy microcontroller. From there, we pass the data through a Jupyter notebook to graph and analyze the results 
                before we make changes for the next run. I wrote automatic ranging and graphing functions into the notebook to make this process as fast as possible, reducing 
                downtime between runs to allow us to collect more data.
            </p>
            <img src={wiring_pic} alt='Wires and microcontorller attached to offroad vehicle' className="ppage-img-vertical"/>
            <p>
                The ECVT utilizes a PD controller to precisely actuate the motor and to quickly adjust to sudden changes. Being able to quickly adapt to sudden changes
                is especially important to us because of the nature of the offroad competition, where hitting rocks and other debris is to be expected. While I previously
                had no experience with PID controllers, I was able to learn about how they work and why they are used. In addition, I gained experience tuning the controller
                and helped to develop some of the code calculating and sending the output signal to the motor.
            </p>
            <p>
                I also gained new leadership experience while being able to apply my previous leadership knowledge. As the club is composed mainly of Mechanical Engineers,
                I gave a lecture on git and version control and what best practices for those tools are. This allowed me to better keep track of which team member was tackling
                each project, and make sure that blocking issues didn't slow down development. It also allowed us to simultaneously develop multiple features using a branch/pull request
                workflow, increasing efficiency. In addition, through the pull requests I was able to ensure that the merged code adhered to our coding standards and format. I also 
                gained experience using PlatformIO to develop and build on the microcontroller instead of using the Arduino IDE as I had previously done.
            </p>
            <img src={me_pic} alt='Me in an offroad vehicle in a desert' className="ppage-img"/>
            <p>
                Our Github repository can be found <a href="https://github.com/Bruin-Racing-Baja/MOAT" target="_blank" rel="noopener noreferrer">here</a>
            </p>
            <p>
                More information about the Baja racing team can be found <a href="https://www.bruinracing.com/baja/" target="_blank" rel="noopener noreferrer">here</a>
            </p>
            <Link to="/projects">Back to Projects</Link>
        </div>
    );
}

export default BajaControls;