import React from "react"
import "../styles/main.scss"
import "../styles/playground.scss"
// import { Link } from "gatsby"
import Seo from "../components/seo"
import Cursor from "../components/cursor"
import NavButtons from "./navButtons"
import funko from "../images/mepop.png"
import HomeNav from "./homenav"
import MobileNav from "./mobilenav"

class Funko extends React.Component {
  
  componentDidMount() {}

  render() {
    const passwordValid = localStorage.getItem('passwordValid') === 'true';

    return (
      <div>
        <Seo title="Funko" />
        <HomeNav />
        <Cursor />
        <NavButtons />
        <MobileNav />
        <div className="play-container">
          <h1>Hello,</h1>
          <p>
            Currently I am a UX/UI Designer on the digital experience team at
            Funko.
          </p>
          <img
            className="funkoimg"
            style={{ marginTop: "24px" }}
            src={funko}
            alt="me as a funko"
          />
        </div>
      </div>
    )
  }
}

export default Funko
