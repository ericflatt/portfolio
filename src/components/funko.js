import React from "react"
import "../styles/main.scss"
import "../styles/playground.scss"
// import { Link } from "gatsby"
import Seo from "../components/seo"
import Cursor from "../components/cursor"
import NavButtons from "./navButtons"
import funko from "../images/mepop.png"


class Funko extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Seo title="Funko" />
        <NavButtons />
        <Cursor />
        <div className="play-container">
          <h1>Hello,</h1>
          <h2>
            Currently I am a UX/UI Designer on the digital experience team at
            Funko.
          </h2>
          <img style={{width:"20%",marginTop:"24px"}} src={funko} alt="me as a funko" />
        </div>
      </div>
    )
  }
}

export default Funko