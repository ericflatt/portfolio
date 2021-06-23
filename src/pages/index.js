import * as React from "react"
// import { Link } from "gatsby"

import Seo from "../components/seo"
import List from "../components/projectList"
import Hero from "../components/hero"
import Cursor from "../components/cursor"

import "../styles/main.scss"

const IndexPage = () => (
  <main>
    <Seo title="Home" />
    <Cursor />
    <Hero />
    <List />
  </main>
)

export default IndexPage
