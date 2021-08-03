import React from "react"
import { Link } from "gatsby"
import "../styles/main.scss"

class MobileNav extends React.Component {
  componentDidMount() {
    var modal = document.getElementById("myModal")

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn")

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0]

    // When the user clicks the button, open the modal
    btn.onclick = function () {
      modal.style.display = "block"
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none"
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none"
      }
    }
  }

  render() {
    return (
      <div className="mobile-nav">
        <svg
          id="myBtn"
          className="mobile-button"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>

        <div id="myModal" className="modal">
          <div className="modal-content">
            
            <span className="close">&times;</span>
            <Link  to="/">
              <div className="top-link">
                <h1>Home</h1>
              </div>
            </Link>
            <Link to="/#work">
              <div>
                <h1>Work</h1>
              </div>
            </Link>
            <Link to="/about">
              <div>
                <h1>About</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default MobileNav
