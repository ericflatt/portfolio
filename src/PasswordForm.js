import React, { useState } from 'react';

const PasswordForm = ({ setPasswordValid }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace 'your-password' with the actual password to protect the page
    if (password === 'funko') {
      localStorage.setItem('passwordValid', 'true');
      setPasswordValid(true);
    } else {
      alert('Invalid password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PasswordForm;
