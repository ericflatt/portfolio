import React from "react"
import { Link } from "gatsby"
import "../styles/main.scss"

class NavButtons extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="nav-buttons">
        <div>
          <Link href="mailto:hello@ericbflatt.com">
            <div style={{ marginTop: "120px" }} className="work-button">
              <div className="work-button__content">Contact</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/about">
            <div style={{ marginTop: "60px" }} className="work-button">
              <div className="work-button__content">About</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="#work">
            <div className="work-button">
              <div className="work-button__content">Work</div>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default NavButtons
