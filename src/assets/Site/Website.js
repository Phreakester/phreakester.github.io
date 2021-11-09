import { Link } from "react-router-dom";

function Website() {
    return(
        <div className='ppage-body'>
            <p>
                Development on this site began far into my first year at UCLA. Original implementation of the site involved
                only HTML and CSS, but to gain more experience using the tools I would use in teachLA, I switched
                to being JS and React based. While the site doesn't really need React since isn't super interactive, it still allowed me to gain more practice
                with React and JS. This experience has helped me on most of my other web development projects, so I think I made the right choice.
            </p>
            <p>
                The site uses BrowserRouter to achieve a multi-page effect. It also is able to dynamically add projects to 
                the projects page based off of a config file and a map function. This allows me to quickly update the page without having to
                hardcode it every time I want to add a new project. Each time you visit the site, a new animated gradient is chosen to keep things a little fresh.
            </p>
            <p>
                The most difficult task so far has been making sure the site is mobile friendly. In my other web development projects, I have focused on usability on a computer or
                laptop without worrying about how the site will look on mobile. This site is a little different, so I had to take the time to make sure it was mobile friendly. I learned
                a lot more about good practice in my CSS as some of my code had to be refactored so it could scale to mobile cleanly.
            </p>
            <p>
                I will continue to work on and update the site as I get better at React and web development as a whole. Its been a fun project so far and i'm excited to see what
                it will turn into in the future.
            </p>

        </div>
    )
}

export default Website;