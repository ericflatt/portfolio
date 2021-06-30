import * as React from "react"
// import { Link } from "gatsby"

import Seo from "../components/seo"
import List from "../components/projectList"
import Hero from "../components/hero"
import Cursor from "../components/cursor"
import NavButtons from "../components/navButtons"
import HomeAbout from "../components/homeAbout"
import "../styles/main.scss"

const IndexPage = () => (
  <main>
    <Seo title="Home" />
    <div className="noise"></div>
    <Cursor />
    <Hero />
    <HomeAbout />
    <List />
    <NavButtons />
  </main>
)

export default IndexPage
