import React from "react"
import { Link } from "gatsby"
import "../styles/main.scss"
import $ from "jquery"


class NavButtons extends React.Component {


  componentDidMount() {
    // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 600, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
  }

  render() {
    return (
      <div className="nav-buttons">
        <div>
          <Link href="mailto:hello@ericbflatt.com">
            <div style={{ marginTop: "120px" }} className="work-button">
              <div className="work-button__content">Contact</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/about">
            <div style={{ marginTop: "60px" }} className="work-button">
              <div className="work-button__content">About</div>
            </div>
          </Link>
        </div>
        <div>
          <Link  to="#work">
            <div className="work-button">
              <div className="work-button__content">Work</div>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default NavButtons
