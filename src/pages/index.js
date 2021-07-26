import * as React from "react"
// import { Link } from "gatsby"

import Seo from "../components/seo"
import List from "../components/projectList"
import Hero from "../components/hero"
import Cursor from "../components/cursor"
import HomeNav from "../components/homenav"
import HomeAbout from "../components/homeAbout"
import "../styles/main.scss"
import MobileNav from "../components/mobilenav"

const IndexPage = () => (
  <main>
    <Seo title="Home" />
    <div className="noise"></div>
    <Cursor />
    <MobileNav />
    <Hero />  
    <List />
    <HomeAbout />
    <HomeNav />
  </main>
)

export default IndexPage
