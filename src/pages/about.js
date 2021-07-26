import * as React from "react"
// import { Link } from "gatsby"

import Seo from "../components/seo"
import About from "../components/aboutPage"
import "../styles/main.scss"
import NavButtons from "../components/navButtons"
import MobileNav from "../components/mobilenav"

const IndexPage = () => (
  <main>
    <Seo title="About" />
    <About />
    <NavButtons />
    <MobileNav />
  </main>
)

export default IndexPage

