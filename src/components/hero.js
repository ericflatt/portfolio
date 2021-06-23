import React from "react"
// import { Link } from "gatsby"
import "../styles/main.scss"


class Hero extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="hero">
          <div className="hero-text-container">
                <h1 className="hero-text">Hi, I'm Eric and I am looking for a job</h1>
          </div>
      </div>
    )
  }
}

export default Hero
