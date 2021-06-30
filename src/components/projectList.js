import React from "react"
import { Link } from "gatsby"
import $ from "jquery"
import "../styles/main.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';

class List extends React.Component {
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
  }

  render() {
    return (
      <div id="work">
        <h1 className="section-intro">work</h1>
        <div  className="work">
          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="wrapper work-item">
            <div className="work-title work-item-inner">
              <div className="work-sub-title">
                <p>Senior Capstone</p>
              </div>
              <Link className="view-cursor cursor-link-blog-post-6"  to="/page-2">
                Holo-cloud
              </Link>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" className="work-item">
            <div className="work-title work-item-inner">
              <div className="work-sub-title">
                <p>Human-Computer Interaction</p>
              </div>
              <Link className="view-cursor cursor-link-blog-post-2" to="/obo">Obo</Link>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" className="work-item">
            <div className="work-title work-item-inner">
              <div className="work-sub-title">
                <p>Prototyping Electronics</p>
              </div>
              <Link className="view-cursor" to="/page-2">Sway</Link>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000" className="work-item">
            <div className="work-title work-item-inner">
              <div className="work-sub-title">
                <p>Human Factors</p>
              </div>
              <Link className="view-cursor cursor-link-blog-post-4" to="/bond">Bond</Link>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000" className="work-item">
            <div className="work-title work-item-inner">
            <div className="work-sub-title">
                <p>What I do on the side</p>
              </div>
              <Link className="view-cursor" to="/playground">Playground</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default List
