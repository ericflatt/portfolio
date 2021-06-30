import * as React from "react"
// import { Link } from "gatsby"

import Seo from "../components/seo"
import Playground from "../components/playground"
import "../styles/main.scss"

const IndexPage = () => (
  <main>
    <Seo title="Playground" />
    <Playground />
  </main>
)

export default IndexPage

