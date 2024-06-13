import React from "react"
import "../styles/main.scss"
import "../styles/about.scss"
// import { Link } from "gatsby"
import $ from "jquery"
import Seo from "../components/seo"
import Cursor from "../components/cursor"
import NavButtons from "../components/navButtons"
// import NavButtons from "../components/navButtons"
import me from "../images/meandgus.png"
import "animate.css/animate.css"
// import CoverFlow from "./coverFlow"

class About extends React.Component {
  componentDidMount() {
    // document.body.style = 'background: black;';
    $(".me")
      .on("mouseenter", function () {
        $(".me-image").addClass("me-visible")
      })
      .on("mouseleave", function () {
        $(".me-image").removeClass("me-visible")
      })
  }

  render() {
    return (
      <div>
        <Seo title="About" />
        <NavButtons />
        <Cursor />
        {/* <div>
          <CoverFlow />
        </div> */}
        <div class="about-container">
          <div class="left-column">
            <img src={me} alt="me" />
          </div>
          <div class="right-column">
            <div className="about-content">
              <h1 className="about-title">About me</h1>
              <h1 className="about-text">
                Hi I'm Eric. Most recently I was a designer on the digital
                experiences team at Funko crafting new experiences for{" "}
                <a
                  className="about-link"
                  target="blank"
                  href="https://funko.com"
                >
                  funko.com
                </a>
                ,{" "}
                <a
                  className="about-link"
                  target="blank"
                  href="https://loungefly.com"
                >
                  loungefly.com
                </a>
                , as well as the Funko mobile app. Previously I was a creative
                tech intern at{" "}
                <a
                  className="about-link"
                  target="blank"
                  href="https://blackmath.com"
                >
                  Black Math
                </a>{" "}
                collaborating on front-end web development and UX/UI design
                based projects for various clients. I have also interned with{" "}
                <a
                  className="about-link"
                  target="blank"
                  href="https://bobblehaus.com"
                >
                  Bobblehaus
                </a>
                ,{" "}
                <a
                  className="about-link"
                  target="blank"
                  href="https://icims.com"
                >
                  iCIMS
                </a>{" "}
                & worked freelance with Vera Roca. I am a graduate of the
                Savannah College of Art and Design with a BFA in User Experience
                Design.<br></br>
                {/* <br></br> I was first drawn to UX because of my curiosity with
                ever evolving technologies and exploring creative ways in which
                we can use them. I set up a raspberry pi to post daily{" "}
                <a
                  className="about-link"
                  target="blank"
                  href="https://twitter.com/erics_plants"
                >
                  twitter
                </a>{" "}
                updates on the well being of my plants & had the idea to create
                a collaborative Spotify queue, you can see{" "}
                <a
                  className="about-link"
                  target="blank"
                  href="https://spotify-collab.glitch.me/"
                >
                  here
                </a>
                , that I finished just weeks before Spotify launched their own.
                <br></br>
                <br></br> */}
                Take a look at my{" "}
                <a
                  className="about-link"
                  target="blank"
                  href="https://drive.google.com/file/d/16aPC_zMT-e-Pj7BFGH8Y15Rd8QMg3XcL/view?usp=sharing"
                >
                  Resume{" "}
                </a>
                , {" "}
                add me on {" "}
                <a
                  className="about-link"
                  target="blank"
                  href="https://linkedin.com/in/ericbflatt"
                >
                  LinkedIn
                </a>
                {" "}and feel free to contact me{" "}
                <a
                  className="about-link"
                  target="blank"
                  href="mailto:eflatt18@gmail.com"
                >
                  eflatt18@gmail.com
                </a>
                <br></br>
                <br></br>
                <span style={{ paddingBottom: "80px" }}>
                  Thanks for stopping by 🙂
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
