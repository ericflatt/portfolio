import React from "react"
// import { Link } from "gatsby"
import "../styles/main.scss"
// import $ from "jquery"


class Hero extends React.Component {
  componentDidMount() {
    
    // let text = document.getElementById("text")
    // let shadow = ""

    // for (let i = 0; i < 20; i++) {
    //   shadow += (shadow ? "," : "") + -i * 1 + "px " + i * 1 + "px 0 #d9d9d9"
    // }

    // text.style.textShadow = shadow
  }

  render() {
    return (
      <div className="hero">
        <div className="hero-text-container">
          <h1  className="hero-text">
            Hi I'm Eric, a designer &amp;<br></br> creative technologist.
          </h1>
        </div>
        {/* <div className="scroll-down">
          <p>scroll down</p>
        </div> */}
        <div id="scroll-down" className="scroll-a scroll-down">
          <a href="/#work">
            <span></span>Scroll Down
          </a>
        </div>
      </div>
    )
  }
}

export default Hero
