import React, { useState } from "react"
import "./styles/main.scss"

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
    <form className="password-form" onSubmit={handleSubmit}>
      <p>Please enter the password</p>

        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

      <button className="password-button" type="submit">Submit</button>
    </form>
  )
}

export default PasswordForm
