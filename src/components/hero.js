import React from "react"
// import { Link } from "gatsby"
import "../styles/hero.scss"
import "../styles/main.scss"
import "../styles/newhero.scss"
import "animate.css/animate.css"
import cloud from "../images/cloud.png"
import Parallax from "react-rellax"

class Hero extends React.Component {
  componentDidMount() {
    // document.addEventListener("scroll", parallax)
    // var cloud = document.getElementById("cloud")
    // function parallax() {
    //   Object.assign(cloud.style, {
    //     transform: "translateY(".concat(window.scrollY * 0.5, "px)"),
    //   })
    //   window.requestAnimationFrame(parallax)
    // }
    // document.addEventListener("scroll", parallaxtwo)
    // var cloudtwo = document.getElementById("cloudtwo")
    // function parallaxtwo() {
    //   Object.assign(cloudtwo.style, {
    //     transform: "translateY(".concat(window.scrollY * 0.5, "px)"),
    //   })
    //   window.requestAnimationFrame(parallaxtwo)
    // }
  }

  render() {
    return (
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
      <div>
        <Parallax speed={-6}>
          <div id="cloud">
            <img className="cloud" src={cloud} alt="cloud bg" />
          </div>
        </Parallax>
        <Parallax speed={-4}>
          <div id="cloudtwo">
            <img className="cloud-two" src={cloud} alt="cloud bg" />
          </div>
        </Parallax>
        <div className="hero-container">
          <div className="hero-intro">
            <h2>
              Hi <span className="wave">👋</span>, I'm Eric. A Product Designer
              living in Seattle, Washington.
            </h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
