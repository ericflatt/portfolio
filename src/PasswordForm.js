import React, { useState } from "react"
import "./styles/main.scss"
import Cursor from "./components/cursor"
import NavButtons from "./components/navButtons"
import HomeNav from "./components/homenav"
import MobileNav from "./components/mobilenav"


const PasswordForm = ({ setPasswordValid }) => {
  
  const [password, setPassword] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    // Replace 'your-password' with the actual password to protect the page
    if (password === "funko") {
      localStorage.setItem("passwordValid", "true")
      setPasswordValid(true)
    } else {
      alert("Invalid password")
    }
  }

  return (
    <div>
       <HomeNav />
        <Cursor />
        <NavButtons />
        <MobileNav />
    <form className="password-form" onSubmit={handleSubmit}>
      <p>This page is password protected. Please reach out for more info @<a className="about-link" href="mailto:eflatt18@gmail.com?subject=Funko Password Request">eflatt18@gmail.com</a>.</p>
      <p style={{marginBottom:"4px"}}>Please enter the password:</p>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

      <button className="password-button" type="submit">Submit</button>
    </form>
    </div>
  )
}

export default PasswordForm
