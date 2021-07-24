import React from "react"
import { Link } from "gatsby"
import "../styles/main.scss"

class Logo extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="logo">
       <Link to="/"><h1>eric flatt</h1></Link>
      </div>
    )
  }
}

export default Logo
