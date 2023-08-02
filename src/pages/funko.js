import Funko from "../components/funko"
import "../styles/main.scss"
import "../styles/main.scss"
import "../styles/playground.scss"
import Seo from "../components/seo"
import Cursor from "../components/cursor"
import HomeNav from "../components/homenav"
import React, { useState, useEffect } from "react"
import PasswordForm from "../PasswordForm"
const ProtectedPage = () => {
  const [passwordValid, setPasswordValid] = useState(false)

  useEffect(() => {
    // Check local storage for the password validity once the component mounts
    const storedPasswordValid = localStorage.getItem("passwordValid") === "true"
    setPasswordValid(storedPasswordValid)
  }, [])

  return (
    <React.Fragment>
      {passwordValid ? (
        <>
          <Seo title="Funko" />
          <HomeNav />
          <Cursor />
          <Funko />
        </>
      ) : (
        <PasswordForm setPasswordValid={setPasswordValid} />
      )}
    </React.Fragment>
  )
}

export default ProtectedPage
