import React from "react"
import "../styles/main.scss"
import "../styles/funko.scss"
import Seo from "../components/seo"
import Cursor from "../components/cursor"
import PageNav from "./PageNav"
import MobileNav from "./mobilenav"
import BasicTabs from "./tabs"
import Footer from "./footer"


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
        <Footer />
      </div>
    )
  }
}

export default Funko
