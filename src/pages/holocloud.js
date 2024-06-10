import React from "react"
import "../styles/main.scss"
import "../styles/holo.scss"
// import { Link } from "gatsby"
import Seo from "../components/seo"
import Cursor from "../components/cursor"
import AOS from 'aos'
import 'aos/dist/aos.css';
import PageNav from "../components/PageNav"
import logo from "../images/holocloud/logo.png"
import render from "../images/holocloud/render.png"
import hub from "../images/holocloud/hub.png"
import visualize from "../images/holocloud/visualize.png"
import dashboard from "../images/holocloud/dashboard.png"
import onboarding from "../images/holocloud/onboarding.png"
import upload from "../images/holocloud/upload.png"
import access from "../images/holocloud/access.png"
import visionvideo from "../images/holocloud/visionvideo.mp4"
import poster from "../images/holocloud/poster.png"
import device from "../images/holocloud/device.png"
import app from "../images/holocloud/app.svg"
import rpiflow from "../images/holocloud/rpiflow.svg"
import proto from "../images/holocloud/proto.svg"
import pics from "../images/holocloud/pics.png"
import pitwo from "../images/holocloud/pitwo.svg"
import leap from "../images/holocloud/leap.svg"
import analysis from "../images/holocloud/analysis.svg"
import trends from "../images/holocloud/trends.svg"
import MobileNav from "../components/mobilenav"

class About extends React.Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div className="holo-body">
        <Seo title="holo-cloud" />
        <PageNav /> 
        <MobileNav />
        <Cursor />
        <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="holo-hero">
          <img src={logo} alt="logo" />
          <h3>Data management and security done right</h3>
        </div>
        <div className="holo-wrapper">
          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="holo-render">
            <img src={render} alt="render" />
            <div>
              <h1>holo-cloud</h1>

              <h3>
                A data management and security product that allows users to
                visualize the entirety of their personal assets and control what
                they would like to protect most.{" "}
              </h3>
            </div>
          </div>
          {/* <div className="holo-videos">
            <div>
              <div>
                  <h1>Real Time Alerts</h1>
              </div>
              <video autoPlay playsInline loop muted>
                <source src={datalandscape} type="video/mp4" />
              </video>
            </div>
          </div> */}
          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="holo-problem">
            <div>
              <h1>Problem</h1>
              <h3>
                Users lack an understanding as well as undervalue their data
                making themselves more vulnerable to cyberattacks.
              </h3>
            </div>
            <div>
              <h1>Our Goal</h1>
              <h3>
                Visualizing users’ online presence and data for it to be easily
                digestable and provide the appropriate tools to manage and
                secure their information.{" "}
              </h3>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <h1 className="features-title">Main Features</h1>
            <h1 className="features-sub">All your assets on high alert</h1>
          </div>
          <div  className="holo-features two-grid">
            <div className="holo-hub">
              <div>
                <h5>Security is our top priority</h5>
                <h3>
                  Utilizing RAID configuration to fragment your saved data for
                  extra level of security
                </h3>
              </div>
              <img src={hub} alt="hub" />
            </div>
            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="holo-hub">
              <div>
                <h5>Visualize your data</h5>
                <h3>
                  Holistic data visualization that directly translates the Vault
                </h3>
              </div>
              <img className="viz-img" src={visualize} alt="hub" />
            </div>
            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="holo-hub">
              <div>
                <h5>Clear and simple dashboard</h5>
                <h3>
                  An aid that guides the user to use the hologram to their needs
                </h3>
              </div>
              <img className="viz-img" src={dashboard} alt="hub" />
            </div>
            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="holo-hub">
              <div>
                <h5>PROVIDE THE INFORMATION THAT YOU NEED</h5>
                <h3>
                  On boarding to help users understand the systems functions
                </h3>
              </div>
              <img className="onboarding-img" src={onboarding} alt="hub" />
            </div>
            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="holo-hub">
              <div>
                <h5>ADD TO THE VAULT</h5>
                <h3>Upload accounts and documents easily through the Vault</h3>
              </div>
              <img className="upload-img" src={upload} alt="hub" />
            </div>
            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="holo-hub">
              <div>
                <h5>MULTIPLE ACCESS POINTS</h5>
                <h3>Access accounts and documents to your convenience</h3>
              </div>
              <img className="upload-img" src={access} alt="hub" />
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="feature">
            <h1 className="features-title">Holo Hub Device</h1>
            <h3>
              The Vault feature utilizes RAID configuration to fragment your
              file across multiple devices on our Raspberry Pi powered main hub,
              creating a ‘fail-safe’ security environment. For anything you
              choose to store you can set an expiration date and level of
              authentication for seamless management of all your assets. The
              device also contains a hologram that illuminates from the center
              of the hub. Its purpose is to show users their data landscape and
              help them better visualize their data and where they are most
              vulnerable.
            </h3>
            <img className="device-image" src={device} alt="device" />
          </div>
          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="feature">
            <h1 className="features-title">Companion App</h1>
            <h3>
              Holo-cloud comes equipped with a companion app for ease of mind on
              the go. With the companion app users can manage all their
              sensitive information from anywhere in the world.
            </h3>
            <img className="device-image" src={app} alt="device" />
          </div>
          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <h1 className="features-title">Process</h1>
          </div>

          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="process-img">
            <div>
              <h1 style={{ color: "#4957DC" }}>Competitor Analysis</h1>
              <img className="top-image" src={analysis} alt="device" />
            </div>
            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
              <h1 style={{ color: "#4957DC" }}>Trends Matrix</h1>

              <img src={trends} alt="device" />
            </div>
            <img src={rpiflow} alt="device" />
            <img src={pitwo} alt="device" />
            <img src={proto} alt="device" />
            <img src={leap} alt="device" />
            <img src={pics} alt="device" />
          </div>
          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <h1 className="features-title">Vision Video</h1>
          </div>
          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="vision-video">
            <video className="holo-video" poster={poster} controls>
              <track kind="captions" />
              <source src={visionvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    )
  }
}

export default About
