import React from "react"
// import { Link } from "gatsby"
import "../styles/newhero.scss"
import "../styles/main.scss"
import "animate.css/animate.css"
import Cursor from "./cursor"
import cloud from "../images/cloud.webp"
// import Cloud from "../components/cloud"

class NewHero extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <main className="hero-box">
        {/* <Cloud /> */}
        <img className="cloud" src={cloud} alt="cloud bg" />
        <img className="cloud-two" src={cloud} alt="cloud bg" />
        {/* <img className="cloud cloud-three" src={cloud} alt="cloud bg" /> */}

        <div className="left-side"></div>
        <div className="right-side"></div>
        <Cursor />
        <div className="hero-container">
          {/* <div className="hero-intro">
            <h2>
              Hi <span className="wave">👋</span>, I'm Eric. A Product Designer
              living in Seattle, Washington.
            </h2>
          </div> */}
          <div className="project-list-grid">
            <div className="">
              <h1>Funko</h1>
              <span>Most Recent Job</span>
            </div>
            <div>
              <h1>Holo-Cloud</h1>
            </div>
            <div>
              <h1>Obo</h1>
            </div>
            <div>
              <h1>Sway</h1>
            </div>
            <div>
              <h1>Bond</h1>
            </div>
            <div>
              <h1>Playground</h1>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default NewHero
