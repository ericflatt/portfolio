import * as React from "react"
// import { Link } from "gatsby"
import Seo from "../components/seo"
import About from "../components/about"
import "../styles/main.scss"
// import NavButtons from "../components/navButtons"
import MobileNav from "../components/mobilenav"
// import HomeNav from "../components/homenav"
import Spline from "@splinetool/react-spline"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <main>
    <Seo title="About" />
    <Spline
      style={{ zIndex: "-1", backgroundColor: "#57797d" }}
      className="spline-bg spline-mobile"
      scene="https://prod.spline.design/vdwYHRH3oVcozf3e/scene.splinecode"
    />
    <About />
    {/* <HomeNav /> */}
    <MobileNav /> 
    <Helmet>
      <style>{"body { background-color: #57797d; }"}</style>
    </Helmet>
  </main>
)

export default IndexPage
