import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"
import "../styles/main.scss"

const IndexPage = () => (
<main>
<Seo title="Home" />
    <h1>Hi</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
</main>

)

export default IndexPage
