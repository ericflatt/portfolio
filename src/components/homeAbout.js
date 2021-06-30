import React from "react"
import "../styles/main.scss"
import me from "../images/me.png"

class HomeAbout extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="about-home">
        <div className="section-intro">
          <h1>about</h1>
        </div>
        <div className="about-home-text">
            
          <h1>
            Lover of any workplace comedy, cartoons, coffee, traveling and metal
            music (not in any particular order). I just gradutated from the
            Savannah College of Art and Design in May of 2021 with a Bachelor of
            Fine Arts in User Experience Design. Right now I am a creative
            tech intern at{" "}
            <a
              className="about-link"
              target="blank"
              href="https://blackmath.com"
            >
              Black Math
            </a>{" "}
            doing work with Figma, React, Node and Spark AR for different clients.
          </h1>
        </div>
      </div>
    )
  }
}

export default HomeAbout
