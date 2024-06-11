// import React from "react"
import { Link } from "gatsby"
import "../styles/main.scss"
import "../styles/mobilenav.scss"

import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { FaBars, FaTimes } from "react-icons/fa"

const GlobalStyle = createGlobalStyle`
  body {
  }
`

const MenuButton = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  z-index: 1000;
  cursor: pointer;
  color: ${({ isOpen }) => (isOpen ? "#13c897" : "#13c897")};
  @media (min-width: 1024px) {
    display: none;
  }
`

const Overlay = styled.div`
  height: 100%;
  z-index: 999;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
`

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const MenuItem = styled.a`
  color: white;
  font-size: 2rem;
  text-decoration: none;
  transition: color 0.2s;
  margin-top:24px;
  margin-bottom:24px;

  &:hover {
    color: #13c897;
  }
`

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <Menu onClick={e => e.stopPropagation()}>
          <Link style={{marginBottom:"24px"}} onClick={handleMenuItemClick} to="/">
            <MenuItem>Home</MenuItem>
          </Link>
          <Link style={{marginBottom:"24px"}} onClick={handleMenuItemClick} to="/#work">
            <MenuItem>Work</MenuItem>
          </Link>
          <Link style={{marginBottom:"24px"}} to="/about">
            <MenuItem>About</MenuItem>
          </Link>
        </Menu>
      </Overlay>
    </>
  )
}

export default MobileNav

// class MobileNav extends React.Component {
//   componentDidMount() {
//     const menuToggle = document.querySelector(".menu-toggle")
//     const mobileNav = document.querySelector(".mobile-nav")
//     const workLink = document.getElementById("worklink") // Get the "Work" link element
//     const home = document.getElementById("home") // Get the "Work" link element
//     const body = document.querySelector("body")

//     menuToggle.addEventListener("click", () => {
//       mobileNav.classList.toggle("active")
//       menuToggle.classList.toggle("active")

//       if (mobileNav.classList.contains("active")) {
//         animateBarsToX()
//         body.style.overflow = "auto" // Prevent scrolling
//       } else {
//         resetBars()
//         body.style.overflow = "auto" // Revert back to normal scrolling
//       }
//     })

//     workLink.addEventListener("click", () => {
//       mobileNav.classList.remove("active")
//       menuToggle.classList.remove("active")
//       resetBars()
//       body.style.overflow = "auto" // Revert back to normal scrolling
//     })

//     home.addEventListener("click", () => {
//       mobileNav.classList.remove("active")
//       menuToggle.classList.remove("active")
//       resetBars()
//       body.style.overflow = "auto" // Revert back to normal scrolling
//     })

//     function animateBarsToX() {
//       const bars = document.querySelectorAll(".bar")
//       bars[0].style.transform = "rotate(48deg) translate(2px, 2px)"
//       bars[1].style.opacity = "0"
//       bars[2].style.transform = "rotate(-48deg) translate(12px, -12px)"
//     }

//     function resetBars() {
//       const bars = document.querySelectorAll(".bar")
//       bars[0].style.transform = "rotate(0deg) translate(0px, 0px)"
//       bars[1].style.opacity = "1"
//       bars[2].style.transform = "rotate(0deg) translate(0px, 0px)"
//     }
//   }

//   render() {
//     return (
//       <div>
//         <div className="menu-toggle">
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </div>
//         <div className="mobile-nav">
//           <ul>
//             <li>
//               <Link id="home" to="/">
//                 <div>Home</div>
//               </Link>{" "}
//             </li>
//             <li>
//               <Link id="worklink" to="/#work">
//                 <div>Work</div>
//               </Link>{" "}
//             </li>
//             <li>
//               <Link to="/about/">
//                 <div>About</div>
//               </Link>{" "}
//             </li>
//           </ul>
//         </div>
//       </div>
//       // <div className="mobile-nav">
//       // {/* <svg
//       //   id="myBtn"
//       //   className="mobile-button"
//       //   viewBox="0 0 100 80"
//       //   width="40"
//       //   height="40"
//       // >
//       //   <rect width="100" height="20"></rect>
//       //   <rect y="30" width="100" height="20"></rect>
//       //   <rect y="60" width="100" height="20"></rect>
//       // </svg> */}

//       // {/* <div id="myModal" className="modal">
//       //   <div className="modal-content">
//       //     <span className="close">&times;</span>
//       //     <Link to="/">
//       //       <div className="top-link">
//       //         <h1>Home</h1>
//       //       </div>
//       //     </Link>
//       //     <Link to="/#work">
//       //       <div>
//       //         <h1>Work</h1>
//       //       </div>
//       //     </Link>
//       //     <Link to="/about">
//       //       <div>
//       //         <h1>About</h1>
//       //       </div>
//       //     </Link>
//       //   </div>
//       // </div> */}
//       //   <div className="float-nav">
//       //     <div className="nav-anchor">
//       //       <Link to="/">HOME</Link>
//       //     </div>
//       //     <div className="nav-anchor">
//       //       <Link to="/#work">WORK</Link>
//       //     </div>
//       //     <div className="nav-anchor">
//       //       <Link to="/about">ABOUT</Link>
//       //     </div>
//       //   </div>
//       // </div>
//     )
//   }
// }

// export default MobileNav
