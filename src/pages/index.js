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
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <main>
    <Seo title="Home" />
    <Helmet>
      <meta
        name="description"
        content="Hi, I'm Eric. A UX Designer and Frontend Developer as well as a recent graduate of SCAD."
      />
      <meta
        name="keywords"
        content="eric flatt, eric, flatt, ux designer, ux, design, designer, scad, frontend developer"
      />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Eric Flatt" />
    </Helmet>
    <div className="noise"></div>
    <Cursor />
    <MobileNav />
    <Hero />
    <HomeAbout />
    <HomeNav />
    {/* <List /> */}
  </main>
)

export default IndexPage
