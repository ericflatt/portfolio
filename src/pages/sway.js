import React from "react"
import "../styles/main.scss"
import "../styles/sway.scss"
import "../styles/holo.scss"
// import { Link } from "gatsby"
import Seo from "../components/seo"
import Cursor from "../components/cursor"
import AOS from "aos"
import "aos/dist/aos.css"
import PageNav from "../components/pageNav"
import logo from "../images/sway/logo.png"
import swayrender from "../images/sway/swayrender.png"
import personaone from "../images/sway/personaone.png"
import journeyone from "../images/sway/journeyone.png"
import personatwo from "../images/sway/personatwo.png"
import journeytwo from "../images/sway/journeytwo.png"
import imgone from "../images/sway/imgone.png"
import imgtwo from "../images/sway/imgtwo.png"
import hand from "../images/sway/hand.png"
import handtwo from "../images/sway/handtwo.png"
import webone from "../images/sway/webone.png"
import webtwo from "../images/sway/webtwo.png"
import webthree from "../images/sway/webthree.png"
import arduino from "../images/sway/arduino.png"
import carbon from "../images/sway/carbon.png"
import process from "../images/sway/process.png"
import product from "../images/sway/product.png"
import MobileNav from "../components/mobilenav"


class Sway extends React.Component {
  componentDidMount() {
    AOS.init()
  }

  render() {
    return (
      <div className="sway-body">
        <Seo title="Sway" />
        <PageNav />
        <MobileNav />
        <Cursor />
        <div className="sway-wrapper">
          <div className="sway-hero">
            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="sway-hero-img">
              <img src={logo} alt="logo" />
              <p>
                A product that helps notify teammates of distraction in
                a more discrete way and allows team members to be more
                responsible and productive throughout meetings. Sway also gives
                team members a holistic view of their productivity through a web
                app.
              </p>
            </div>
            <div>
                <img data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="sway-render" src={swayrender} alt="render" />
            </div>
            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="holo-problem">
            <div>
              <h1>Problem</h1>
              <h3>
              Team distraction can cause conflict and actually stop work from being completed on time
              </h3>
            </div>
            <div>
              <h1>Our Goal</h1>
              <h3>
              To enhance the team dynamic experience by leveraging motion in a less distracting way that allows for the team to be more productive.
              </h3>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000"  className="looked-into">
            <h1>We Looked Into</h1>
            <h3>Different factors that can lead into distraction within the team dynamic to help us guide our survey and interview questions.</h3>
          </div>
          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000"  className="looked-into">
            <h1>We Create Mindsets</h1>
            <h3>Based on the people we interviewed we created two spectrums that our users fall under.</h3>
          </div>
          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000"  className="looked-into">
            <h1>With all the insights we gathered</h1>
            <h3>We created 2 personas and users journey of our ideal target audience to get a better understanding their goals,  frustration  and opportunities for us to solve the problem</h3>
          </div>
          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="personas" >
              <img src={personaone} alt="pic" />
              <img src={journeyone} alt="pic" />
              <img src={personatwo} alt="pic" />
              <img src={journeytwo} alt="pic" />
          </div>
          <div className="main-features" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
              <h1>Main Features</h1>
              <div  className="holo-features two-grid">
            <div className="sway-hub">
              <div>
                <h5>Timer & Initiate meeting</h5>
                <h3>
                Green light on meeting indicate meeting is in session and there is no distraction happening in the group.
                The light ring is also a 20 minutes timer that users can check on the time without going on their phone or laptop

                </h3>
              </div>
              <img src={imgone} alt="hub" />
            </div>
            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="sway-hub">
              <div>
                <h5>Touch & Haptic Feedback</h5>
                <h3>
                Sway has a built in force sensitive resistor which allows users to simply tap the top in more discrete way and receive a vibration to signal that their input has been recorded across all buttons.
                </h3>
              </div>
              <img style={{borderRadius:"7px"}} src={hand} alt="hub" />
            </div>
            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="sway-hub">
              <div>
                <h5>Pick Moderator</h5>
                <h3>
                Yellow light will indicate picked moderator which allows team member to be more responsible and prepared as well as a sense of ownership toward the projects
                </h3>
              </div>
              <img  src={imgtwo} alt="hub" />
            </div>
            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="sway-hub">
              <div>
                <h5>Notify Distraction </h5>
                <h3>
                If there is any distraction during the meeting, the light will gradually change into red to let team members know that they are being distracted
                </h3>
              </div>
              <img style={{borderRadius:"7px"}} src={handtwo} alt="hub" />
            </div>
            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="sway-hub">
              <div>
                <h5>Home Screen</h5>
                <h3>
                Users can easily access to Sway web app and look at upcoming meeting, on going projects, data visualization, to do list and calendar</h3>
              </div>
              <img  src={webone} alt="hub" />
            </div>
            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="sway-hub">
              <div>
                <h5>Create agenda</h5>
                <h3>
                Users can create agenda and set realistic goal for upcoming meetings
                </h3>
              </div>
              <img  src={webtwo} alt="hub" />
            </div>
            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="sway-hub">
              <div>
                <h5>Create new meeting</h5>
                <h3>
                User can create new meeting with individual team and invite team members 
                </h3>
              </div>
              <img  src={webthree} alt="hub" />
            </div>
            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="sway-hub">
              <div>
                <h5>Arduino Parts</h5>
                <h3>
                For our parts we used Neopixel light rings, sensitivity resistor, nano adruino, haptic motor control, vibrating motor disc, bluetooth sensor and battery. We were able to test out all the part individually and soldered everything together to put inside the buttons. 
                </h3>
              </div>
              <img style={{transform:"rotate(90deg)"}} src={arduino} alt="hub" />
            </div>
          </div>
          <div>
            <h1>Process</h1>
          </div>
          <div>
          <h1 style={{color:"black", textAlign:"left"}}>Code Snippet</h1>
              <h3>Sway was created using various arduino parts</h3>
          </div>
          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="process two-grid">
              <img src={process} alt="carbon" />
              <img src={product} alt="carbon" />
              <img src={carbon} alt="carbon" />
              <img  src={arduino} alt="hub" />

          </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Sway
