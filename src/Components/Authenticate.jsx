// components/Authenticate.jsx

import React, { useState } from 'react';
// components/SignUpForm.jsx and components/Authenticate.jsx
import '../App.css'; // Corrected path to reach App.css in the src directory

export default function Authenticate({ token, setUsername, username }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to authenticate");
      }

      setSuccessMessage(result.message);
      setUsername(result.data.username); // Set username from response
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="authenticate">
      <h2>Authenticate</h2>
      {successMessage && <p className="success">{successMessage} Welcome, {username}!</p>}
      {error && <p className="error">{error}</p>}
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
}
