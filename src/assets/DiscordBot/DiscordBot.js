import { Link } from 'react-router-dom';

import ProjectHeader from '../../components/shared/ProjectHeader';

function DiscordBot(){
    return(
        <div className='ppage-body'>
            <ProjectHeader title='Game Server Discord Bot' />
            <p>
                Over quarintine, my firends and I would end up playing lots of different video games together, some of which 
                would use a server to enable multiplayer. However, if the friend who was hosting the server was not
                on, nobody would be able to play the game. As I was trying to learn Python at the time, I tried
                my hand at making a Discord bot that would let us start or stop the server whenever we wanted.
            </p>
            <p>
                The first step was to figure out how to make a Discord bot in python. Luckily, there is a well
                documented <a href='https://discordpy.readthedocs.io/en/latest/index.html'>library </a> that
                made it much easier to interface with discord. I added rudementary features to allow the bot
                to send and recieve messages as well as to report the status of servers. However, this hadn't
                actually started to interface with a server yet.
            </p>
            <p>
                I ran the bot and servers on an amlgamation of a bunch of older windows PCs my friends and I had
                lying around. I flashed it with Linux and started working on the interface with the game servers.
                The system that worked involved using the subprocess library to start the server using
                shell scripts personalized to each game. This allowed the program to send commands to the running
                server to get it to start, save, or stop. It also let the program recieve information about the
                server back to report statistics such as the number of players.
            </p>
            <p>
                I was able to learn a lot about python and Linux through this project. It was also one of 
                my first forays into programming, and I was very happy with how useful the finished product
                ended up being. My friends were able to start and stop Minecraft, Terraria, and other servers
                without me having to be online
            </p>
            <p>
                The code can be found <a href='https://github.com/Phreakester/discord-bot-server-manager'>here</a>
            </p>
            <p>
                <Link to="/projects">Back to Projects</Link>
            </p>
        </div>
    )
}
export default DiscordBot;