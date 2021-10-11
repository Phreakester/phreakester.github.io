import bee_pic from './BeeBlocks/Bee2.svg'
import playnet_pic from './Playnet/playnet.svg'
import ai_pic from './Rnn/ai_wordmark.svg'
import cobra_pic from './Cube/cobra.png'
import pw_pic from './Cube/pw.png'
import piano_pic from './MIDI/piano.png'
import react_pic from './Site/react.png'

import BeeBlocksPage from './BeeBlocks/BeeBlocksPage'
import Playnet from './Playnet/Playnet'
import Cube from './Cube/Cube'
import Rnn from './Rnn/Rnn.js'
import Midi from './MIDI/Midi.js'
import Website from './Site/Website.js'

const project_dict = {
    'BeeBlocks' : {
        'title':'BeeBlocks',
        'description':'A fun product from a design-a-thon',
        'img_src':bee_pic,
        'img_alt':'this is not a picture',
        'path':'/projects/beeblocks',
        'page':BeeBlocksPage,
    },
    'MIDI Keyboard' : {
        'title':'MIDI Keyboard',
        'description':'Taking a 70s keyboard into the 2020s',
        'path':'/projects/midikeyboard',
        'img_src': piano_pic,
        'img_alt': 'A logo of a piano / keeyboard',
        'page': Midi,
    },
    'RNN' : {
        'title':'Recurrent Neural Network Larning Lab',
        'description':'Explaining recurrent neural networks',
        'path':'/projects/rnns',
        'img_src':ai_pic,
        'img_alt':'Blue logo showing computer traces',
        'page':Rnn,
    },
    'Playnet':{
        'title':'Playnet Learning Lab',
        'description':'Teaching schoolkids about the internet',
        'img_src':playnet_pic,
        'img_alt':'A logo of a planet with rings and a play button at its center',
        'path':'/projects/playnets',
        'page': Playnet,
    },
    'Cube':{
        'title':'Magic: The Gathering Cube',
        'description':'Designing a custom trading card set',
        'path':'/projects/cube',
        'img_src': cobra_pic,
        'img_alt': 'A logo of a green cobra',
        'page': Cube,
    },
    'Website':{
        'title':'Personal Website',
        'description':'The inner workings of the site you are currently on',
        'path':'/projects/site',
        'img_src': react_pic,
        'img_alt': 'The React logo, which looks like a blue atom',
        'page': Website,

    },
  }

export default project_dict;