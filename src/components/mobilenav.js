import React from "react"
import { Link } from "gatsby"
import "../styles/main.scss"
import "../styles/mobilenav.scss"

class MobileNav extends React.Component {
  componentDidMount() {
    const menuToggle = document.querySelector(".menu-toggle")
    const mobileNav = document.querySelector(".mobile-nav")
    const workLink = document.getElementById("worklink") // Get the "Work" link element
    const home = document.getElementById("home") // Get the "Work" link element
    const body = document.querySelector("body")

    menuToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("active")
      menuToggle.classList.toggle("active")

      if (mobileNav.classList.contains("active")) {
        animateBarsToX()
        body.style.overflow = "auto" // Prevent scrolling
      } else {
        resetBars()
        body.style.overflow = "auto" // Revert back to normal scrolling
      }
    })

    workLink.addEventListener("click", () => {
      mobileNav.classList.remove("active")
      menuToggle.classList.remove("active")
      resetBars()
      body.style.overflow = "auto" // Revert back to normal scrolling
    })

    home.addEventListener("click", () => {
      mobileNav.classList.remove("active")
      menuToggle.classList.remove("active")
      resetBars()
      body.style.overflow = "auto" // Revert back to normal scrolling
    })

    function animateBarsToX() {
      const bars = document.querySelectorAll(".bar")
      bars[0].style.transform = "rotate(48deg) translate(2px, 2px)"
      bars[1].style.opacity = "0"
      bars[2].style.transform = "rotate(-48deg) translate(12px, -12px)"
    }

    function resetBars() {
      const bars = document.querySelectorAll(".bar")
      bars[0].style.transform = "rotate(0deg) translate(0px, 0px)"
      bars[1].style.opacity = "1"
      bars[2].style.transform = "rotate(0deg) translate(0px, 0px)"
    }
  }

  render() {
    return (
      <div>
        <div className="menu-toggle">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="mobile-nav">
          <ul>
            <li>
              <Link id="home" to="/">
                <div>Home</div>
              </Link>{" "}
            </li>
            <li>
              <Link id="worklink" to="/#work">
                <div>Work</div>
              </Link>{" "}
            </li>
            <li>
              <Link to="/about/">
                <div>About</div>
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
      // <div className="mobile-nav">
      // {/* <svg
      //   id="myBtn"
      //   className="mobile-button"
      //   viewBox="0 0 100 80"
      //   width="40"
      //   height="40"
      // >
      //   <rect width="100" height="20"></rect>
      //   <rect y="30" width="100" height="20"></rect>
      //   <rect y="60" width="100" height="20"></rect>
      // </svg> */}

      // {/* <div id="myModal" className="modal">
      //   <div className="modal-content">
      //     <span className="close">&times;</span>
      //     <Link to="/">
      //       <div className="top-link">
      //         <h1>Home</h1>
      //       </div>
      //     </Link>
      //     <Link to="/#work">
      //       <div>
      //         <h1>Work</h1>
      //       </div>
      //     </Link>
      //     <Link to="/about">
      //       <div>
      //         <h1>About</h1>
      //       </div>
      //     </Link>
      //   </div>
      // </div> */}
      //   <div className="float-nav">
      //     <div className="nav-anchor">
      //       <Link to="/">HOME</Link>
      //     </div>
      //     <div className="nav-anchor">
      //       <Link to="/#work">WORK</Link>
      //     </div>
      //     <div className="nav-anchor">
      //       <Link to="/about">ABOUT</Link>
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default MobileNav
