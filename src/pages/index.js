import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"
import List from "../components/projectList"
import Weather from "../components/weather"

import "../styles/main.scss"

const IndexPage = () => (
  <main>
    <Seo title="Home" />
    <List />
    {/* <Weather /> */}
  </main>
)

export default IndexPage
