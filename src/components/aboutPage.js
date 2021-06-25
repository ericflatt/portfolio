import React from "react"
import "../styles/main.scss"
import "../styles/about.scss"
// import { Link } from "gatsby"
import LaunchIcon from "@material-ui/icons/Launch"
import $ from "jquery"
import Seo from "../components/seo"
import Cursor from "../components/cursor"
import NavButtons from "./navButtons"
import me from "../images/me.jpg"
import "animate.css/animate.css"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import "../styles/carousel.scss"
import one from "../images/travel/one.png"
import two from "../images/travel/two.png"
import three from "../images/travel/three.png"
import four from "../images/travel/four.png"
import five from "../images/travel/five.png"
import six from "../images/travel/six.png"
import seven from "../images/travel/seven.png"
import eight from "../images/travel/eight.png"
import nine from "../images/travel/nine.png"
import ten from "../images/travel/ten.png"
import eleven from "../images/travel/eleven.png"
import stoneone from "../images/stonepony.jpg"
import stonetwo from "../images/stonetwo.jpg"

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
    const handleDragStart = e => e.preventDefault()

    const items = [
      <div className="item" data-value="1">
        <img
          onDragStart={handleDragStart}
          className="carousel-image"
          src={one}
          alt="carousel"
        />
      </div>,
      <div className="item" data-value="2">
        <img
          onDragStart={handleDragStart}
          className="carousel-image"
          src={two}
          alt="carousel"
        />
      </div>,
      <div className="item" data-value="3">
        <img
          onDragStart={handleDragStart}
          className="carousel-image"
          src={three}
          alt="carousel"
        />
      </div>,
      <div className="item" data-value="4">
        <img
          onDragStart={handleDragStart}
          className="carousel-image"
          src={four}
          alt="carousel"
        />
      </div>,
      <div className="item" data-value="5">
        <img
          onDragStart={handleDragStart}
          className="carousel-image"
          src={five}
          alt="carousel"
        />
      </div>,
      <div className="item" data-value="6">
        <img
          onDragStart={handleDragStart}
          className="carousel-image"
          src={six}
          alt="carousel"
        />
      </div>,
      <div className="item" data-value="7">
        <img
          onDragStart={handleDragStart}
          className="carousel-image"
          src={seven}
          alt="carousel"
        />
      </div>,
      <div className="item" data-value="8">
        <img
          onDragStart={handleDragStart}
          className="carousel-image"
          src={eight}
          alt="carousel"
        />
      </div>,
      <div className="item" data-value="9">
        <img
          onDragStart={handleDragStart}
          className="carousel-image"
          src={nine}
          alt="carousel"
        />
      </div>,
      <div className="item" data-value="10">
        <img
          onDragStart={handleDragStart}
          className="carousel-image"
          src={ten}
          alt="carousel"
        />
      </div>,
      <div className="item" data-value="11">
        <img
          onDragStart={handleDragStart}
          className="carousel-image"
          src={eleven}
          alt="carousel"
        />
      </div>,
    ]

    const responsive = {
      0: { items: 1 },
      568: { items: 2 },
      1024: { items: 3 },
    }
    return (
      <div>
        <Seo title="About" />
        <NavButtons />
        <Cursor />
        <div className="about-container">
          <div>
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
              , lover of any workplace comedy, cartoons, coffee, traveling and
              heavy metal (not in any particular order). I just gradutated from
              the Savannah College of Art and Design in May of 2021 with a
              Bachelor of Fine Arts in User Experience Design. Right now I am a
              creative technology intern at{" "}
              <a
                className="about-link"
                target="blank"
                href="https://blackmath.com"
              >
                Black Math
                <LaunchIcon className="launch-icon" />
              </a>{" "}
              doing front-end web development. Previously I've interned at{" "}
              <a
                className="about-link"
                target="blank"
                href="https://bobblehaus.com"
              >
                Bobblehaus
                <LaunchIcon className="launch-icon" />
              </a>{" "}
              and{" "}
              <a className="about-link" target="blank" href="https://icims.com">
                iCIMS
                <LaunchIcon className="launch-icon" />
              </a>
              , and worked freelance at Vera Roca most notably working on{" "}
              <a
                className="about-link"
                target="blank"
                href="https://staples.com"
              >
                Staples
                <LaunchIcon className="launch-icon" />
              </a>{" "}
              redesign. I'm always experimenting with cool new technologies. You
              can see this statement in action on{" "}
              <a
                className="about-link"
                target="blank"
                href="https://twitter.com/erics_plants"
              >
                twitter
                <LaunchIcon className="launch-icon" />
              </a>{" "}
              where a raspberry pi monitors the well being of my plants. As well
              as{" "}
              <a
                className="about-link"
                target="blank"
                href="https://spotify-collab.glitch.me/"
              >
                here
                <LaunchIcon className="launch-icon" />
              </a>
              <span style={{ fontSize: "16px" }}>
                (might load slow, Glitch does not load fast)
              </span>{" "}
              a collaborative Spotify queue that I made before Spotify created
              their own version. After hours you'll catch me rooting for the New
              York Islanders, watching tv, the occasional videogame and on my
              computer engulfed in whatever side project I've got going on.
              <br></br>
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
              There's a young me playing at the Stone Pony in Asbury Park, New Jersey. Most famous for where Bruce Springsteen was discovered.
            </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default About
