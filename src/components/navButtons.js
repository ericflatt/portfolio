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
      <div>
        <div className="nav-buttons">
          <div>
            <a href="mailto:hello@ericbflatt.com">
              <div style={{ marginTop: "120px" }} className="work-button">
                <div className="work-button__content">Contact</div>
              </div>
            </a>
          </div>
          <div>
            <Link to="/about">
              <div style={{ marginTop: "60px" }} className="work-button">
                <div className="work-button__content">About</div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/#work">
              <div className="work-button">
                <div className="work-button__content">Work</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NavButtons
