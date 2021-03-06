import React from "react"
import "../styles/main.scss"
import $ from "jquery"


class Cursor extends React.Component {
    componentDidMount() {
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
      <div>
        <div className="cursor cursor-shadow"></div>
        <div className="cursor cursor-dot"></div>
      </div>
    )
  }
}

export default Cursor
