import * as React from "react"
// import { Link } from "gatsby"

import Seo from "../components/seo"
import Playground from "../components/playground"
import "../styles/main.scss"
import NavButtons from "../components/navButtons"
import MobileNav from "../components/mobilenav"

const IndexPage = () => (
  <main>
    <Seo title="Playground" />
    <Playground />
    <NavButtons />
    <MobileNav />
  </main>
)

export default IndexPage

