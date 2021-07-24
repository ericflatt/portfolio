import React from "react"
import { Link } from "gatsby"
import "../styles/main.scss"
import $ from "jquery"
import logo from "../images/logo.svg"

class NavButtons extends React.Component {
  componentDidMount() {
    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        {
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
        }
      })
  }

  render() {
    return (
      <nav>
          {/* <div className="nav-item">
            <a href="mailto:hello@ericbflatt.com">
              <div  className="work-button">
                <div className="work-button__content">Contact</div>
              </div>
            </a>
          </div> */}
            
            <Link to="/about">
              <div  className="work-button">
                <div className="work-button__content">About</div>
              </div>
            </Link>
            <Link to="/#work">
              <div style={{marginRight:"175px" }} className="work-button">
                <div className="work-button__content">Work</div>
              </div>
            </Link>
      </nav>
    )
  }
}

export default NavButtons
