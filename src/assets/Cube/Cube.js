import './../../styles/ProjectPage.css'
import './../../styles/index.css'

function Cube() {
    return(
        <div className='ppage-body'>
            <p> 
                Magic: The Gathering is a popular trading card game that I enjoy playing casually with my friends. Players can cast powerful spells 
                and summon mythical creatures to help defeat their opponent. There are many different ways to
                play, some official and some not. One of the official ways of playing involves opening packs of cards, then drafting cards 
                sequentially to construct a deck on the fly before battling each other. 
            </p>
            <p>
                These packs contain a small random sample from a large set of cards designed by the game's designers. These sets are carefully 
                constructed to include meaningful synergies between all the cards, enabling players to build interesting and powerful decks.
                In addition, these sets contain evocative art to create a consisteent theme and tell a nrrative throughout the set.
            </p>
            <p>
                My favorite way to play Magic is called cube, where a player constructs their own custom set then drafts and battles his or her friends.
                The cube is usually composed of cards chosen from many different sets of cards made Magic's parent company. The designer must still include
                the synergies and themes included in official, released sets. 
            </p>
            <p>
                I have really enjoyed the experience of building the cube from scratch, starting with cards purely from my existing collection,
                then researching and upgrading it over time. Building a set that is both fun and balanced was much more difficult than previously 
                anticipated, and I had to reasearch, test, and iterate in order to improve my cube.
            </p>
            <p>
                The sorted list of cards found in my cube can be found <a 
                href="https://cubecobra.com/cube/list/13rvu"
                target="_blank" rel="noopener noreferrer">here.</a>
            </p>
        </div>
    )
}

export default Cube