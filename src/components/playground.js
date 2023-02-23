import React from "react"
import "../styles/main.scss"
import "../styles/playground.scss"
// import { Link } from "gatsby"
import Seo from "../components/seo"
import Cursor from "../components/cursor"
import NavButtons from "./navButtons"
import flux from "../images/playground/flux.png"
import startup from "../images/playground/startup.png"
import comotion from "../images/playground/comotion.png"
import twitter from "../images/playground/twitter.png"
import spotify from "../images/playground/spotify.png"


class Playground extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Seo title="Playground" />
        <NavButtons />
        <Cursor />
        <div className="play-container">
          <h1 style={{margin:"0"}}>Here's some cool stuff I've worked on and explored with</h1>
          <p style={{marginBottom:"16px"}}>Note: Some of these sites have been updated since I worked on them and may appear different.</p>
          <div style={{marginBottom:"40px"}} className="play-grid">
            <div>
                <img className="play-image" src={startup} alt="comotion" />
              <a
                className="about-link"
                href="https://scadstartup.com"
                target="blank"
              >
                <p>SCAD StartUp</p>
              </a>
              <p>An annual design sprint with over 300 participants</p>
            </div>
            <div>
                <img className="play-image" src={comotion} alt="comotion" />
              <a
                className="about-link"
                href="https://scadcomotion.com"
                target="blank"
              >
                <p>SCAD CoMotion</p>
              </a>
              <p>A student run design conference</p>
            </div>
            <div>
                <img className="play-image" src={flux} alt="flux" />
              <a
                className="about-link"
                href="https://scadflux.com"
                target="blank"
              >
                <p>FLUX UX Design Club</p>
              </a>
              <p>SCAD's User Experience Design Club</p>
            </div>
            <div>
                <img className="play-image" src={twitter} alt="twitter" />
              <a
                className="about-link"
                href="https://twitter.com/erics_plants"
                target="blank"
              >
                <p>My plant twitter account</p>
              </a>
              <p>A Raspberry pi monitors the health of my plants</p>
            </div>
            <div>
                <img className="play-image" src={spotify} alt="twitter" />
              <a
                className="about-link"
                href="https://spotify-collab.glitch.me/"
                target="blank"
              >
                <p>Spotify Collaborative Queue</p>
              </a>
              <p>A collaborative spotify queue with a robot if your feeling uninspired</p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Playground
