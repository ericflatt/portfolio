import React from "react"
import "../styles/main.scss"

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
            Fine Arts in User Experience Design. Most recently I was a creative
            tech intern at{" "}
            <a
              className="about-link"
              target="blank"
              href="https://blackmath.com"
            >
              Black Math
            </a>{" "}
            doing work in Figma, React, Node and Spark AR for different clients.<br>
            </br>
            Here you will find my{" "}
            <a
              className="about-link"
              target="blank"
              href="https://drive.google.com/file/d/1ZS598bNVBwWnP0SA1yeic6HGVclOD0LV/view?usp=sharing"
            >
              Resume
            </a>
            <br></br>
            Currently seeking full time UX/Product Design role
          </h1>
        </div>
      </div>
    )
  }
}

export default HomeAbout
