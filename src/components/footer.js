import React from "react"
import "../styles/main.scss"
import "../styles/funko.scss"



class Footer extends React.Component {
  
  componentDidMount() {}

  render() {

    return (
      <div>
        <footer className="funko-container funko-footer">
          <p>
            Please note: All projects during my employment at Funko are the sole
            property of Funko.
          </p>
        </footer>
      </div>
    )
  }
}

export default Footer
