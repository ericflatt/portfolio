import React from "react"
import "../styles/main.scss"
import "../styles/playground.scss"
import "../styles/about.scss"
// import { Link } from "gatsby"
import $ from "jquery"
import Seo from "../components/seo"
import Cursor from "../components/cursor"
import NavButtons from "../components/navButtons"
// import NavButtons from "../components/navButtons"
import me from "../images/meandgus.png"
import "animate.css/animate.css"
import CoverFlow from "./coverFlow"
import startup from "../images/playground/startup.png"
import comotion from "../images/playground/comotion.png"
import twitter from "../images/playground/twitter.png"
import spotify from "../images/playground/spotify.png"
import flux from "../images/playground/flux.png"

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
        <div style={{ padding: "90px", height: "fit-content" }}>
          <h1 className="about-title">About me</h1>
        </div>
        <div class="about-container">
          <div class="left-column">
            <img src={me} alt="me" />
          </div>
          <div class="right-column">
            <div className="about-content">
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
                , add me on{" "}
                <a
                  className="about-link"
                  target="blank"
                  href="https://linkedin.com/in/ericbflatt"
                >
                  LinkedIn
                </a>{" "}
                and feel free to contact me at{" "}
                <a
                  className="about-link"
                  target="blank"
                  href="mailto:eflatt18@gmail.com"
                >
                  eflatt18@gmail.com
                </a>
                .<br></br>
                <br></br>
              </h1>
            </div>
          </div>
        </div>
        <div className="right-column music-section">
          <h2>
            I am a huge music fan, vinyl collector and drummer. My Current
            listening rotation <span className="down-arrow">↓</span>{" "}
          </h2>
        </div>
        <div>
          <CoverFlow />
        </div>
        <div className="right-column music-section">
          <h2>
            I also enjoy videogames, watching hockey, going to concerts and
            hanging out with my dog. These are some side projects I've worked
            on, Note: Some of these sites have been updated since I worked on
            them and may appear different.
          </h2>
        </div>
        <div className="play-container">
          <p style={{ marginBottom: "16px", color: "white" }}></p>
          <div style={{ marginBottom: "40px" }} className="play-grid">
            <div>
              <img className="play-image" src={spotify} alt="twitter" />
              <a
                className="about-link"
                href="https://spotify-collab.glitch.me/"
                target="_blank"
                rel="noreferrer"
              >
                <p>Spotify Collaborative Queue</p>
              </a>
              <p>
                A collaborative spotify queue with a robot if your feeling
                uninspired
              </p>
            </div>

            <div>
              <img className="play-image" src={comotion} alt="comotion" />
              <a
                className="about-link"
                href="https://2021.scadcomotion.com/"
                target="_blank"
                rel="noreferrer"
              >
                <p>SCAD CoMotion</p>
              </a>
              <p>A student run design conference</p>
            </div>
            <div>
              <img className="play-image" src={twitter} alt="twitter" />
              <a
                className="about-link"
                href="https://twitter.com/erics_plants"
                target="_blank"
                rel="noreferrer"
              >
                <p>My plant twitter account</p>
              </a>
              <p>A Raspberry pi monitors the health of my plants</p>
            </div>
            <div>
              <img className="play-image" src={startup} alt="comotion" />
              <a
                className="about-link"
                href="https://scadstartup.com/"
                target="_blank"
                rel="noreferrer"
              >
                <p>SCAD StartUp</p>
              </a>
              <p>An annual design sprint with over 300 participants</p>
            </div>
            <div>
              <img className="play-image" src={flux} alt="flux" />
              <a
                className="about-link"
                href="https://scadflux.com"
                target="_blank"
                rel="noreferrer"
              >
                <p>FLUX UX Design Club</p>
              </a>
              <p>SCAD's User Experience Design Club</p>
            </div>
          </div>
        </div>
        <span
          className="about-container"
          style={{ paddingBottom: "80px", color: "white" }}
        >
          Thanks for stopping by 🙂
        </span>
      </div>
    )
  }
}

export default About
