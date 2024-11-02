// src/App.jsx

import React, { useState } from 'react';
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import './App.css'; // Import the CSS file

export default function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null); // New state for username

  return (
    <div className="app">
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} setUsername={setUsername} username={username} />
    </div>
  );
}
