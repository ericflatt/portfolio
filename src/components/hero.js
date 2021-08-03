import React from "react"
// import { Link } from "gatsby"
import "../styles/hero.scss"
import "animate.css/animate.css"
import { motion } from "framer-motion"

// import $ from "jquery"

class Hero extends React.Component {
  componentDidMount() {
    // let text = document.getElementById("text")
    // let shadow = ""
    // for (let i = 0; i < 20; i++) {
    //   shadow += (shadow ? "," : "") + -i * 1 + "px " + i * 1 + "px 0 #d9d9d9"
    // }
    // text.style.textShadow = shadow
  }

  render() {
    return (
      <div className="hero">
        <div className="hero-name">
        {/* <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: .6,
            }}
          > */}
          <div className="hero-animation">
            <h1>Eric</h1>
            <h1 className="hero-flatt">Flatt</h1>
          </div>
          <div className="hero-neg">
            <span className="hero-desc">UX Designer &<br></br> Front End Developer</span>
          </div>
          {/* </motion.div> */}
          <svg>
            <filter id="noise">
              <feTurbulence
                baseFrequency="0 0"
                result="NOISE"
                numOctaves=".5"
                id="turbulence"
              >
                <animate
                  attributeName="baseFrequency"
                  values="0.005 0.005;0 0;"
                  dur="12s"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="30" />
            </filter>
          </svg>
        </div>
      </div>
      // <div style={{overflowX:"hidden"}} className="hero">
      //   <div className="hero-text-container">
      //     {/* <h1  className="hero-text">
      //       Eric <span className="flatt">Flatt</span>
      //     </h1> */}
          // <motion.div
          //   initial={{ scale: 0 }}
          //   animate={{ rotate: 360, scale: 1 }}
          //   transition={{
          //     type: "spring",
          //     stiffness: 260,
          //     damping: 20,
          //     delay: .6,
          //   }}
          // >
      //       <svg
      //         className="name-image"
      //         xmlns="http://www.w3.org/2000/svg"
      //         viewBox="0 0 603.75 486.78"
      //       >
      //         <defs>
      //           <style>.cls-1</style>
      //         </defs>
      //         <g id="Layer_2" data-name="Layer 2">
      //           <g id="Layer_1-2" data-name="Layer 1">
      //             <path
      //               className="cls-1"
      //               d="M47.58,5.83V210.92Q23.79,210.53,0,209.69V4.11Q23.79,5.3,47.58,5.83Zm-14.69-.4C67.45,6.5,102,6.62,136.57,6.26V63.79C102,67,67.45,65.89,32.89,56.51Zm0,92.64c32.6,12.56,65.2,14.62,97.8,11V150c-32.6,3.7-65.2,1.57-97.8-11.43Zm0,82.15c34.56,9.2,69.12,10.24,103.68,7.14v23.87c-34.56.26-69.12.18-103.68-.59Z"
      //               transform="translate(0)"
      //             />
      //             <path
      //               className="cls-1"
      //               d="M216.45,210.17q-21.88.38-43.76.68V94c14.58-3.23,29.17-7.15,43.76-11.34ZM248,113.45q-4-.77-9.84,1.14a28,28,0,0,0-11.45,7.21,33.77,33.77,0,0,0-7.64,12.48,48.77,48.77,0,0,0-2.64,16.52c-3.53-3.92-7-7.8-10.57-11.73a76.59,76.59,0,0,1,6.31-30.29,83.61,83.61,0,0,1,16.59-25.52c6.85-7.08,14-11.62,21.44-13.78a34.61,34.61,0,0,1,14.1-1.25c4.5.58,7.93,2.19,10.28,4.87-6.36,14-12.73,28.76-19.09,43.54A19.67,19.67,0,0,0,248,113.45Z"
      //               transform="translate(0)"
      //             />
      //             <path
      //               className="cls-1"
      //               d="M298.39,4.56C303.48,1.3,309.55,0,316.59,0,323.84,0,330,1.24,335,3.52s7.49,5.28,7.49,9.54-2.5,8.29-7.49,12a41.31,41.31,0,0,1-18.36,7.62c-7,1.19-13.11.55-18.2-2.2a13.55,13.55,0,0,1-7.64-12.62C290.75,12.37,293.29,7.81,298.39,4.56ZM338,50.71V208.26q-21.43.21-42.87.56V60C309.45,56.27,323.74,53.05,338,50.71Z"
      //               transform="translate(0)"
      //             />
      //             <path
      //               className="cls-1"
      //               d="M416.45,140.05a47.58,47.58,0,0,0,13.06,17.47,39.85,39.85,0,0,0,18.06,8.77,50.68,50.68,0,0,0,15.72.68,59.83,59.83,0,0,0,13.8-3.22,26.59,26.59,0,0,0,10.43-6.63v43.17a82,82,0,0,1-17.62,8.32,79,79,0,0,1-25.85,4A63.32,63.32,0,0,1,404,199.09c-11.85-9.08-21.14-21.55-27.9-36.14a111.94,111.94,0,0,1-10.13-47.33c0-17,3.38-30.46,10.13-41.15a52,52,0,0,1,27.9-22c11.85-4,25.21-4.23,40.09.18a79.09,79.09,0,0,1,25.85,13,94.22,94.22,0,0,1,17.62,17.79v43.46A81.83,81.83,0,0,0,476.8,109.5a86.55,86.55,0,0,0-14.25-14.15,55.36,55.36,0,0,0-15-8.51c-6.46-2.31-12.48-2.5-18.06-.65a23.51,23.51,0,0,0-13.06,10.7q-4.71,7.89-4.7,19.68A56.89,56.89,0,0,0,416.45,140.05Z"
      //               transform="translate(0)"
      //             />
      //             <path
      //               className="cls-1"
      //               d="M51.4,271Q72.67,318.6,94,431.66,72.47,429.46,51,427.58q-25.5-75-51-144.46C17.15,278.29,34.28,274.3,51.4,271Zm-15.86,3.26a757.32,757.32,0,0,1,99.26-14.45q3,9.33,6,22.49c-32,.67-63.92,5.19-95.88,15.89Q40.22,285.13,35.54,274.26ZM53.8,325c29.9-11,59.8-14.85,89.7-14.27q2.87,15.72,5.71,34.84c-28.88-1.75-57.76.72-86.64,9.78Q58.18,339.25,53.8,325Z"
      //               transform="translate(0)"
      //             />
      //             <path
      //               className="cls-1"
      //               d="M220.34,240q8.1,74.51,16.21,208.7-20.15-2.64-40.29-5.19-12.51-146.83-25-197.57Z"
      //               transform="translate(0)"
      //             />
      //             <path
      //               className="cls-1"
      //               d="M303.66,427.61a21.31,21.31,0,0,0,6.56,6.64,27.43,27.43,0,0,0,9,3.76,30.52,30.52,0,0,0,13.1.3,18.61,18.61,0,0,0,10.09-5.61c2.69-2.91,4.16-7,4.37-12.38,1.29,5.49,2.56,10.79,3.81,15.85-.32,6.92-2.78,11.9-7.26,15.6s-10.11,6.17-16.87,7.62a66.23,66.23,0,0,1-21.75.93A52.9,52.9,0,0,1,283,453a47.83,47.83,0,0,1-16.53-17.42,56.28,56.28,0,0,1-7.17-25.67c-.62-13.31,3.24-22.36,11.85-27.07s21.21-4.34,37.61.84a122.55,122.55,0,0,1,21.54,9A115.81,115.81,0,0,1,346.52,403a53.14,53.14,0,0,1,9.91,9.56q-.4,8.78-.81,16.89a77.23,77.23,0,0,0-15.14-11A89,89,0,0,0,322,410.61q-7.56-2.24-12-1.93c-3,.2-5.2,1.15-6.66,2.82s-2.18,4.09-2.15,7.18A16.86,16.86,0,0,0,303.66,427.61Zm-38.21-96.79A192.93,192.93,0,0,1,293.14,328a130.61,130.61,0,0,1,36,4,106.46,106.46,0,0,1,32.5,13.32,67.56,67.56,0,0,1,21.79,21.54A44.51,44.51,0,0,1,390,393.71q-3.3,47.66-6.61,74.47-19.22-2.49-38.43-5.05,1.4-29.89,2.79-70.63a23.51,23.51,0,0,0-1.31-8.86,24,24,0,0,0-4.59-7.65,28.44,28.44,0,0,0-7.91-6.17A57.3,57.3,0,0,0,323,365.39a84.39,84.39,0,0,0-32.55-3.24,62.13,62.13,0,0,0-9.16,1.55C276.16,352.58,270.86,341.52,265.45,330.82Z"
      //               transform="translate(0)"
      //             />
      //             <path
      //               className="cls-1"
      //               d="M505.6,353.19q-3,24.33-6.06,44.81c-29.77,3.85-59.54,1.79-89.31-3.52q1.59-18.89,3.19-41.27C444.15,357.26,474.87,358.12,505.6,353.19ZM487.83,288q-13.12,144.53-26.25,189.85-19.21-2.21-38.43-4.59,9.78-44.07,19.56-182.85C457.75,290.21,472.79,289.46,487.83,288Z"
      //               transform="translate(0)"
      //             />
      //             <path
      //               className="cls-1"
      //               d="M603.75,314.6q-4.54,24-9.1,47.76c-29.77,19.46-59.54,30.18-89.31,34.81q3.12-20.62,6.24-45C542.3,346.47,573,334.82,603.75,314.6Zm-13.86-50.55q-20.68,130.8-41.37,222.73-19.21-1.71-38.44-3.68,17.35-62.61,34.69-204.8A362.68,362.68,0,0,0,589.89,264.05Z"
      //               transform="translate(0)"
      //             />
      //           </g>
      //         </g>
      //       </svg>
      //     </motion.div>
      //   </div>
      //   {/* <div className="scroll-down">
      //     <p>scroll down</p>
      //   </div> */}
      //   <div id="scroll-down" className="scroll-a scroll-down">
      //     <a href="/#work">
      //       <span></span>Scroll Down
      //     </a>
      //   </div>
      // </div>
    )
  }
}

export default Hero
