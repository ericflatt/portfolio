import * as React from "react"
// import { Link } from "gatsby"

import Seo from "../components/seo"
import Funko from "../components/funko"
import "../styles/main.scss"
import NavButtons from "../components/navButtons"
import MobileNav from "../components/mobilenav"

const IndexPage = () => (
  <main>
    <Seo title="Playground" />
    <Funko />
    <NavButtons />
    <MobileNav />
  </main>
)

export default IndexPage

