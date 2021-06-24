import * as React from "react"
// import { Link } from "gatsby"

import Seo from "../components/seo"
import About from "../components/aboutPage"
import "../styles/main.scss"

const IndexPage = () => (
  <main>
    <Seo title="About" />
    <About />
  </main>
)

export default IndexPage

