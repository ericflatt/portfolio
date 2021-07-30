import React from "react"
import "../styles/main.scss"
import "../styles/about.scss"
// import { Link } from "gatsby"
import $ from "jquery"
import Seo from "../components/seo"
import Cursor from "../components/cursor"
import NavButtons from "../components/navButtons"
import me from "../images/me.jpg"
import "animate.css/animate.css"

class About extends React.Component {
  componentDidMount() {
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
        <div>
          <div className="wrapper">
            <h1 className="about-title">About me</h1>
            <div className="about-content">
              <h1 className="about-text">
                Hi I'm{" "}
                <span className="me">
                  Eric{" "}
                  <img
                    className="me-image animate__animated animate__rollIn"
                    src={me}
                    alt="me"
                  />
                </span>
                , lover of all workplace comedies, cartoons, coffee, traveling
                and metal music (not in any particular order). I’m a recent grad
                from the Savannah College of Art and Design with
                a BFA in User Experience Design. I am currently a creative tech
                intern at{" "}
                <a
                  className="about-link"
                  target="blank"
                  href="https://blackmath.com"
                >
                  Black Math
                </a>{" "}
                collaborating on front-end web development and UI/UX design
                based projects. I have previously interned with{" "}
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
                & worked freelance with Vera Roca.<br></br><br></br> I was first drawn to UX
                because of my curiosity with ever evolving technologies and
                exploring creative ways in which we can use them. I set up a
                raspberry pi to post daily {" "}
                <a
                  className="about-link"
                  target="blank"
                  href="https://twitter.com/erics_plants"
                >
                  twitter
                </a>{" "}
                updates on the well being of my plants & had the genius idea to
                create a collaborative Spotify queue, you can see{" "}
                <a
                  className="about-link"
                  target="blank"
                  href="https://spotify-collab.glitch.me/"
                >
                  here
                </a>,{" "}
                that I finished just weeks before Spotify launched their own.
                <br></br>
                <br></br>
                I am currently seeking full-time opportunities.
                <br></br>
                <br></br>
                Take a look at my{" "}
                <a
                  className="about-link"
                  target="blank"
                  href="https://drive.google.com/file/d/1ZS598bNVBwWnP0SA1yeic6HGVclOD0LV/view?usp=sharing"
                >
                  Resume
                </a>{" "}
                and feel free to contact me {" "}
                <a
                  className="about-link"
                  target="blank"
                  href="mailto:hello@ericbflatt.com"
                >
                  hello@ericbflatt.com
                </a>
                .<br></br>
                <br></br>
                Thanks for stopping by 🙂
                {/* <br></br>
              <br></br>
              Traveling is something I love to do, and I was fortunate to be
              able to do a fair amount before the pandemic.
              <div className="carousel-cursor">
                <AliceCarousel
                  mouseTracking
                  infinite
                  items={items}
                  responsive={responsive}
                />
              </div>
              While studying abroad in Hong Kong I was able to go around and
              spend time in the surrounding countries. This may sound strange
              but some of the best chinese food I've ever had was actually in
              Amsterdam. Being able to see the world is something I truely enjoy
              and I hope to be able to continue doing so soon.
              <br></br>
              <br></br>
              Music has also been a lifelong passion of mine. Learning to play
              drums at a young age to eventually picking up the bass, making and
              listening to music was always on my mind.
              <div>
                <img className="stone-pony" src={stoneone} alt="stone pony" />
                <img
                  className="stone-ponytwo"
                  src={stonetwo}
                  alt="stone pony"
                />
              </div>
              There's a young me playing at the Stone Pony in Asbury Park, New Jersey. Most famous for where Bruce Springsteen was discovered. */}
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
