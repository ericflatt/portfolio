import React from "react"
// import { Link } from "gatsby"
import "../styles/hero.scss"
import "../styles/main.scss"
import "animate.css/animate.css"



class Hero extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="hero">
        <div className="hero-name">
          <div className="hero-animation">
            <h1>Eric</h1>
            <h1 className="hero-flatt">Flatt</h1>
          </div>
          <div className="hero-neg">
            <span className="hero-desc">
              Currently designing digital experiences @ <a style={{textDecoration:"underline"}} href="https://funko.com" target="blank">funko</a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
