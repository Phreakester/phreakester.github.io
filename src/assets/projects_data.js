import bee_pic from './BeeBlocks/bee.png'

import BeeBlocksPage from './BeeBlocks/BeeBlocksPage'

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
        'pagetext':'This is the basically rendered page text that will be put on the page if no specific page component is given but this file may get ugly if the text goes onnnnnn and onnnnn and onnnnnnn and onnnnn and onnnnnnn and onnnnn and onnnnnnn and onnnnn and onnnnnnn and onnnnn and onnnnnnn and onnnnn and onnnnnnn and onnnnn and onnnnnnn and onnnnn and onnnnnnn and onnnnn and onnnnnnn and onnnnn and onnnnnnn and onnnnn and onnnnnnn'
    },
    'Meet your server' : {
        'title':'Meet your server',
        'description':'I made the server currently serving your computer this site! Would you like to meet him?',
        'path':'/projects/meetserver',
    },
    'Playnet':{
        'title':'Playnet',
        'description':'They are a waste of money',
        'path':'/projects/SNESgames',
    },
  }

export default project_dict;