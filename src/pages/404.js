import * as React from "react"

import Seo from "../components/seo"

const NotFoundPage = () => (
  <main>
    <Seo title="404: Not found" />
    <h1>Page not found</h1>
    <p>Sorry, go back <a style={{textDecoration:"underline"}} href="/">home</a></p>
    <div className="gif">
      <iframe
        className="gif-404"
        title="gif"
        src="https://giphy.com/embed/hyyV7pnbE0FqLNBAzs"
      ></iframe>
    </div>
  </main>
)

export default NotFoundPage
