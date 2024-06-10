import * as React from "react"
// import { Link } from "gatsby"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Cursor from "../components/cursor"
import NavButtons from "../components/navButtons"
import HomeAbout from "../components/homeAbout"
import "../styles/main.scss"
import MobileNav from "../components/mobilenav"
import { Helmet } from "react-helmet"
import Spline from '@splinetool/react-spline';


const IndexPage = () => (
  
  <main>
    <Seo title="Home" />
    <Helmet> 
    <meta name="theme-color" content="#f6f6f6"/>

      <meta
        name="description" 
        content="Hi, I'm Eric. A UX Designer who dabbles in front end development."
      />
      <meta
        name="keywords"
        content="eric flatt, eric, flatt, ux designer, ux, design, designer, scad"
      />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Eric Flatt" />
    </Helmet>
    <div className="noise">
      <Spline className="spline-bg" scene="https://prod.spline.design/vdwYHRH3oVcozf3e/scene.splinecode" />
    </div>
    
    <Cursor />
    <MobileNav />
    <Hero />
    <HomeAbout />
    <NavButtons />
  </main>
)

export default IndexPage
