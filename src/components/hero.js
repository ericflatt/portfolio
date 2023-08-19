import React from "react"
// import { Link } from "gatsby"
import "../styles/hero.scss"
import "../styles/main.scss"
import "../styles/newhero.scss"
import "animate.css/animate.css"
import cloud from "../images/cloud.png"
import Parallax from "react-rellax"
import cssda from "../images/cssda.png"

class Hero extends React.Component {
  componentDidMount() {}

  render() {
    return (
      // old hero
      // <div className="hero">
      //   <div className="hero-name">
      //     <div className="hero-animation">
      //       <h1>Eric</h1>
      //       <h1 className="hero-flatt">Flatt</h1>
      //     </div>
      //     <div className="hero-neg">
      //       <span className="hero-desc">
      //         UX Designer seeking new opportunities
      //       </span>
      //     </div>
      //   </div>
      // </div>
      <div className="hero-box">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.cssdesignawards.com/sites/eric-flatt-portfolio/44138/"
        >
          <img className="cssda" src={cssda} alt="css design award nominee" />
        </a>
        <Parallax speed={-6}>
          <div>
            <img className="cloud" src={cloud} alt="cloud bg" />
          </div>
        </Parallax>
        <Parallax speed={-4}>
          <div>
            <img className="cloud-two" src={cloud} alt="cloud bg" />
          </div>
        </Parallax>
        <Parallax speed={-3}>
          <div>
            <img className="cloud-three" src={cloud} alt="cloud bg" />
          </div>
        </Parallax>
        <div className="hero-container">
          <div className="hero-intro">
            <h2>
              Hi <span className="wave">👋</span>, I'm Eric. A Product Designer
              living in Seattle, Washington.
            </h2>
            <p>
              A little about me: Most recently I was working on the digital
              experiences team at Funko. I was responsible for designing and
              prototyping new features for our direct to consumer e-commerce
              platform as well as the Funko mobile app.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
