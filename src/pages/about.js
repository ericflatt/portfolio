import * as React from "react"
import { Link } from "gatsby"
import LaunchIcon from '@material-ui/icons/Launch';

import Seo from "../components/seo"
import Cursor from "../components/cursor"

import "../styles/main.scss"
import "../styles/about.scss"


const AboutPage = () => (
  <main>
    <Seo title="About" />
    <Cursor />
    <div className="about-container">
      <article>
        <h1 className="about-text">
        Hi I'm Eric, lover of any workplace comedy, cartoons, coffee, traveling and heavy metal (not in any particular order). I just gradutated from the Savannah College of Art and Design in May of 2021 with a Bachelor of Fine Arts in User Experience Design. Right now I am a creative technology intern at <Link className="about-link" target="blank" to="https://blackmath.com">Black Math<LaunchIcon className="launch-icon"/></Link> doing front-end web development. Previously I've interned at <Link className="about-link" target="blank" to="https://bobblehaus.com">Bobblehaus<LaunchIcon className="launch-icon"/></Link> and <Link className="about-link" target="blank" to="https://icims.com">iCIMS<LaunchIcon className="launch-icon"/></Link>, and worked freelance at Vera Roca most notably working on <Link className="about-link" target="blank" to="https://staples.com">Staples<LaunchIcon className="launch-icon"/></Link> redesign. I'm always experimenting with cool new technologies. You can see this statement in action on <Link className="about-link" target="blank" to="https://twitter.com/erics_plants">twitter<LaunchIcon className="launch-icon"/></Link> where a raspberry pi monitors the well being of my plants. As well as <Link className="about-link" target="blank" to="https://spotify-collab.glitch.me/">here<LaunchIcon className="launch-icon"/></Link><span style={{fontSize:"16px"}}>(might load slow, Glitch does not load fast)</span> a collaborative Spotify queue that I made before Spotify made their own version.
        
        </h1>
      </article>
    </div>
  </main>
)

export default AboutPage
