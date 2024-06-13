import React from "react"
import "../styles/main.scss"
import "../styles/funko.scss"
import Seo from "../components/seo"
import Cursor from "../components/cursor"
import PageNav from "./pageNav"
import MobileNav from "./mobilenav"
import BasicTabs from "./tabs"
import FunkoFooter from "./funkofooter"


class Funko extends React.Component {
  
  componentDidMount() {}

  render() {
    // const passwordValid = localStorage.getItem('passwordValid') === 'true';// eslint-disable-line
    return (
      <div>
        <Seo title="Funko" />
        <BasicTabs />
        {/* <HomeNav /> */}
        <Cursor />
        <PageNav />
        <MobileNav />
        <FunkoFooter />
      </div>
    )
  }
}

export default Funko
