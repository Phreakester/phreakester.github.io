import bee_pic from './BeeBlocks/Bee2.svg'
import playnet_pic from './Playnet/playnet.svg'
import ai_pic from './Rnn/ai_wordmark.svg'
import cobra_pic from './Cube/cobra.png'
import piano_pic from './MIDI/piano.png'
import react_pic from './Site/react.png'
import discord_pic from './DiscordBot/discord.png'

import BeeBlocksPage from './BeeBlocks/BeeBlocksPage'
import Playnet from './Playnet/Playnet'
import Cube from './Cube/Cube'
import Rnn from './Rnn/Rnn.js'
import Midi from './MIDI/Midi.js'
import Website from './Site/Website.js'
import DiscordBot from './DiscordBot/DiscordBot'

const project_dict = {
    'Playnet':{
        'title':'Playnet Learning Lab',
        'description':'Teaching schoolkids about the internet',
        'img_src':playnet_pic,
        'img_alt':'A logo of a planet with rings and a play button at its center',
        'path':'/projects/playnets',
        'page': Playnet,
    },
    'MIDI Keyboard' : {
        'title':'MIDI Keyboard',
        'description':'Taking a 70s keyboard into the 2020s',
        'path':'/projects/midikeyboard',
        'img_src': piano_pic,
        'img_alt': 'A logo of a piano / keeyboard',
        'page': Midi,
    },
    'Discord':{
        'title':'Discord Bot',
        'description':'A discord bot to host game servers for my friends',
        'path':'/projects/bot',
        'img_src':discord_pic,
        'img_alt': 'The Discord logo of a game controller with eyes',
        'page': DiscordBot,
    },
    'RNN' : {
        'title':'Recurrent Neural Network Larning Lab',
        'description':'Explaining recurrent neural networks',
        'path':'/projects/rnns',
        'img_src':ai_pic,
        'img_alt':'Blue logo showing computer traces',
        'page':Rnn,
    },
    'Website':{
        'title':'Personal Website',
        'description':'The inner workings of the site you are currently on',
        'path':'/projects/site',
        'img_src': react_pic,
        'img_alt': 'The React logo, which looks like a blue atom',
        'page': Website,
    },
    'Cube':{
        'title':'Magic: The Gathering Cube',
        'description':'Designing a custom trading card set',
        'path':'/projects/cube',
        'img_src': cobra_pic,
        'img_alt': 'A logo of a green cobra',
        'page': Cube,
    },
    'BeeBlocks' : {
        'title':'BeeBlocks',
        'description':'A fun product from a design-a-thon',
        'img_src':bee_pic,
        'img_alt':'this is not a picture',
        'path':'/projects/beeblocks',
        'page':BeeBlocksPage,
    },
  }

// const org_dict = {
//     'racing':{
//         'title': "Bruin Racing: Baja",
//         'description': "A UCLA based club dedicated to designing, building, and testing a car to compete in a baja racing competition",
//         'role':'ECVT and Electronics subteam member',
//         'dates':'September 2020 - Present',
//         'img':'https://www.bruinracing.com/wp-content/uploads/2020/04/baja-logo-1.png',
//         'img_alt':'A logo of a car',
//     },
//     'teachla':{
//         'title': " ACM TeachLA",
//         'description':'A part of ACM at UCLA that specializes in bringing quality computer science eduation to underserved communities in LA',
//         'role':'Project Manager',
//         'dates':'September 2020 - Present',
//         'img':'https://www.acm.org/sites/default/files/styles/large/public/images/teachla_logo_0.png?itok=0_X_qZ-_',
//         'img_alt':'A logo of a laptop',
//     },
//     'tea':{
//         'title': 'Themed entertainment association(TEA) @ UCLA',
//         'description':'An official TEA club on campus that focuses on the techniques and methods used to produce themed entertainment experiences such as theme parks and museums.',
//         'role':'Programming Director',
//         'dates':'September 2020 - Present',
//         'img':'https://www.acm.org/sites/default/files/styles/large/public/images/tea_logo_0.png?itok=0_X_qZ-_',
//         'img_alt':'A logo of a laptop',
//     },
//     'ambassadors':{
//         'title': 'UCLA Engineering Ambassadors',
//         'description': 'Student empoloyees who lead tours and organize other events to help engage prospective students and alumni to the school of engineering',
//         'role':'Ambassador',
//         'dates':'April 2021 - Present',
//         'img':'https://www.acm.org/sites/default/files/styles/large/public/images/ambassadors_logo_0.png?itok=0_X_qZ-_',
//         'img_alt':'A logo of a laptop',
//     }
//     }

// export default { project_dict, org_dict };
export default project_dict;