import React from "react"
import { Link } from "gatsby"
import "../styles/main.scss"
import logo from "../images/logo.svg"

class Logo extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="logo">
       <Link to="/"><img width="10%" src={logo} alt="logo" /></Link>
      </div>
    )
  }
}

export default Logo
