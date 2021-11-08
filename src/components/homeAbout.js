import React from "react"
import "../styles/main.scss"
import { Link } from "gatsby"
import $ from "jquery"
import "../styles/main.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import oboimage from "../images/oboimage.png";
import upload from "../images/holocloud/upload.png";
import sway from "../images/sway.png";
import scrapbook from "../images/bond/scrapbook.png";
import funko from "../images/funko.png"

class HomeAbout extends React.Component {
  componentDidMount() {

    AOS.init();

    $(window).mousemove(function (e) {
      $(".cursor").css({
        left: e.pageX,
        top: e.pageY,
      })
    })
    $(".cursor-link")
      .on("mouseenter", function () {
        $(".cursor").addClass("active")
      })
      .on("mouseleave", function () {
        $(".cursor").removeClass("active")
      })
    // image appear
    $(".cursor-link-blog-post-1")
      .on("mouseenter", function () {
        $(".work-item-inner").addClass("image-appear")
      })
      .on("mouseleave", function () {
        $(".work-item-inner").removeClass("image-appear")
      })
    //Blog page cursors with image
    //Blog post 1:
    $(".cursor-link-blog-post-1")
      .on("mouseenter", function () {
        $(".cursor").addClass("active-blog-post-1")
      })
      .on("mouseleave", function () {
        $(".cursor").removeClass("active-blog-post-1")
      })
    //Blog post 2:
    $(".cursor-link-blog-post-2")
      .on("mouseenter", function () {
        $(".cursor").addClass("active-blog-post-2")
      })
      .on("mouseleave", function () {
        $(".cursor").removeClass("active-blog-post-2")
      })
    //Blog post 3:
    $(".cursor-link-blog-post-3")
      .on("mouseenter", function () {
        $(".cursor").addClass("active-blog-post-3")
      })
      .on("mouseleave", function () {
        $(".cursor").removeClass("active-blog-post-3")
      })
    //Blog post 4:
    $(".cursor-link-blog-post-4")
      .on("mouseenter", function () {
        $(".cursor").addClass("active-blog-post-4")
      })
      .on("mouseleave", function () {
        $(".cursor").removeClass("active-blog-post-4")
      })
    //Blog post 5:
    $(".cursor-link-blog-post-5")
      .on("mouseenter", function () {
        $(".cursor").addClass("active-blog-post-5")
      })
      .on("mouseleave", function () {
        $(".cursor").removeClass("active-blog-post-5")
      })
    //Blog post 6:
    $(".cursor-link-blog-post-6")
      .on("mouseenter", function () {
        $(".cursor").addClass("active-blog-post-6")
      })
      .on("mouseleave", function () {
        $(".cursor").removeClass("active-blog-post-6")
      })
    //Blog post 7:
    $(".cursor-link-blog-post-7")
      .on("mouseenter", function () {
        $(".cursor").addClass("active-blog-post-7")
      })
      .on("mouseleave", function () {
        $(".cursor").removeClass("active-blog-post-7")
      })

    $(document).ready(function () {
      $(".work-item-inner").hover(function () {
        $(this).toggleClass("image-appear");
      });
    });
  }

  render() {
    return (
      <div className="about-home">
        <div className="section-intro">
          <h1>about</h1>
        </div>
        <div className="about-home-text">
          <div>
          <img src={funko} alt="funko" />
          </div>
          <h1>
            Lover of any workplace comedy, cartoons, coffee, traveling and metal
            music (not in any particular order). Currently I am designing digital experiences at{" "}
            <a
              className="about-link"
              target="blank"
              href="https://funko.com"
            >
              Funko
            </a>. {" "}

            Most recently I was a creative
            tech intern at{" "}
            <a
              className="about-link"
              target="blank"
              href="https://blackmath.com"
            >
              Black Math
            </a>{" "}
            doing work in Figma, React, Node and Spark AR for different clients.
            <br></br>
            Here you will find my{" "}
            <a
              className="about-link"
              target="blank"
              href="https://drive.google.com/file/d/1SubpvE2xl7dhFJgzvcZo3Wwk6ZVntGf2/view?usp=sharing"
            >
              Resume
            </a>
          </h1>
        </div>

        {/* Work Section */}

        <div id="work">
          <h1 className="section-intro">work</h1>
          <div className="work">
            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="wrapper work-item">
              <div className="work-title work-item-inner">
                <div className="work-sub-title">
                  <p>Senior Capstone</p>
                </div>
                <Link className="view-cursor cursor-link-blog-post-6" to="/holocloud">
                  <span className="project-color">Holo-cloud</span>
                  <img className="project-image holo-image" src={upload} alt="test" />
                </Link>
              </div>

            </div>

            <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" className="work-item">
              <div className="work-title work-item-inner">
                <div className="work-sub-title">
                  <p>Human-Computer Interaction</p>
                </div>
                <Link className="view-cursor cursor-link-blog-post-2" to="/obo"><span className="project-color">Obo</span></Link>
                <img className="project-image obo-image" src={oboimage} alt="test" />
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" className="work-item">
              <div className="work-title work-item-inner">
                <div className="work-sub-title">
                  <p>Prototyping Electronics</p>
                </div>
                <Link className="view-cursor cursor-link-blog-post-3" to="/sway"><span className="project-color">Sway</span></Link>
                <img className="project-image sway-img" src={sway} alt="test" />
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000" className="work-item">
              <div className="work-title work-item-inner">
                <div className="work-sub-title">
                  <p>Human Factors</p>
                </div>
                <Link className="view-cursor cursor-link-blog-post-4" to="/bond"><span className="project-color">Bond</span></Link>
                <img className="project-image bond-img" src={scrapbook} alt="test" />
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000" className="work-item">
              <div className="work-title work-item-inner">
                <div className="work-sub-title">
                  <p>What I do on the side</p>
                </div>
                <Link className="view-cursor" to="/playground"><span className="project-color">Playground</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default HomeAbout
