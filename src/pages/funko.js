// import * as React from "react"
// // import { Link } from "gatsby"
// import PasswordForm from "../PasswordForm"
// import Seo from "../components/seo"
import Funko from "../components/funko"
import "../styles/main.scss"
// import NavButtons from "../components/navButtons"
// import MobileNav from "../components/mobilenav"
import "../styles/main.scss"
import "../styles/playground.scss"
import Seo from "../components/seo"
import Cursor from "../components/cursor"
// import funko from "../images/mepop.png"
import HomeNav from "../components/homenav"

// const IndexPage = () => (
//   <main>
//     <Seo title="Funko" />
//     <Funko />
//     <NavButtons />
//     <MobileNav />
//   </main>
// )

// export default IndexPage

import React, { useState } from "react"
import PasswordForm from "../PasswordForm"
const ProtectedPage = () => {
  const [passwordValid, setPasswordValid] = useState(
    localStorage.getItem("passwordValid") === "true"
  )

  return (
 
      <React.Fragment>
      {passwordValid ? (
        <><Seo title="Funko" /><HomeNav /><Cursor /><Funko /></>
      ) : (
        <PasswordForm setPasswordValid={setPasswordValid} />
      )}
  </React.Fragment>
  )
}

export default ProtectedPage