import React from "react"
import { Link } from "gatsby"
import "../styles/main.scss"
import $ from "jquery"

class HomeNav extends React.Component {
  componentDidMount() {
    const targetDiv = document.getElementById("work");
    const btn = document.getElementById("toggle");
    btn.onclick = function () {
      if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
      } else {
        targetDiv.style.display = "block";
      }
    };
    $(document).ready(function() {

      $(window).scroll(function() {
  
        if($(this).scrollTop() > 0) {
            $('.nav').css({"opacity": "1"});
        }
      });
  });

    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
          var target = $(this.hash)
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]")
          if (target.length) {
            event.preventDefault()
            $("html, body").animate(
              {
                scrollTop: target.offset().top,
              },
              600,
              function () {
                var $target = $(target)
                $target.focus()
                if ($target.is(":focus")) {
                  return false
                } else {
                  $target.attr("tabindex", "-1")
                  $target.focus()
                }
              }
            )
          }
      })
  }

  render() {
    return (
      <nav className="nav" style={{opacity:"0", transition:".3s all ease"}}>
          {/* <div className="nav-item">
            <a href="mailto:hello@ericbflatt.com">
              <div  className="work-button">
                <div className="work-button__content">Contact</div>
              </div>
            </a>
          </div> */}
                <div className="logo">
       <Link to="/"><span role="img" aria-label="home">🏠</span></Link>
      </div>
            
            <Link to="/about">
              <div  className="work-button">
                <div className="work-button__content">About</div>
              </div>
            </Link>
            <Link id="toggle" to="/#work">
              <div style={{marginRight:"175px" }} className="work-button">
                <div className="work-button__content">Work</div>
              </div>
            </Link>
      </nav>
    )
  }
}

export default HomeNav
