import * as React from "react"
import "../styles/main.scss"
import NewHero from "../components/newhero"
import Cursor from "../components/cursor"

const IndexPage = () => (
  <main>
    <Cursor />
    <NewHero />
  </main>
)

export default IndexPage
