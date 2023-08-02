import React from "react"
import "../styles/main.scss"
import "../styles/funko.scss"
import Seo from "../components/seo"
import Cursor from "../components/cursor"
import NavButtons from "./navButtons"
import MobileNav from "./mobilenav"
import BasicTabs from "./tabs"


class Funko extends React.Component {
  
  componentDidMount() {}

  render() {
    const passwordValid = localStorage.getItem('passwordValid') === 'true';// eslint-disable-line

    return (
      <div>
        <Seo title="Funko" />
        <BasicTabs />
        {/* <HomeNav /> */}
        <Cursor />
        <NavButtons />
        <MobileNav />

      </div>
    )
  }
}

export default Funko
