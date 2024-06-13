import React from "react"
import "../styles/main.scss"
import linkedin from "../images/linkedin.png"
import email from "../images/email.png"

class Footer extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <footer className="">
          <div className="footer-img">
            <img src={email} alt="email me" />
            <img src={linkedin} alt="linkedin profile" />
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer
