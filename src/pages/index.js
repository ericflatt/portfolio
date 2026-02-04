import * as React from "react"
// import { Link } from "gatsby"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  
  <main style={{overflowX:"hidden"}}>
    <Seo title="eric flatt" />
    <Helmet> 
    <meta name="theme-color" content="#f6f6f6"/>

      <meta
        name="description" 
        content="Hi, I'm Eric."
      />
      <meta
        name="keywords"
        content="eric flatt, eric, flatt"
      />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Eric Flatt" />
    </Helmet>
    <div
    style={{fontFamily:"serif",padding:"16px"}}
    >
      <p>you have reach the website of eric flatt</p>
      <p>thanks for stopping by</p>
    </div>
    {/* <div className="noise">
      <Spline className="spline-bg" scene="https://prod.spline.design/vdwYHRH3oVcozf3e/scene.splinecode" />
    </div>
    
    <Cursor />
    <MobileNav />
    <Hero />
    <HomeAbout />
    <NavButtons /> */}

  </main>
)

export default IndexPage
