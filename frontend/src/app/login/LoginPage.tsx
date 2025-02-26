import React, { useState } from "react";
import './LoginPage.css'; // Import your styles

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login submission logic here
    console.log("Username:", username);
    console.log("Password:", password);
    debugger;
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Sign In With</h2>
        <div className="social-buttons">
          <button className="facebook-button">
            <span className="facebook-icon">F</span> Facebook
          </button>
          <button className="google-button">
            <span className="google-icon">G</span> Google
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
            <a href="/forgot-password" className="forgot-password">Forgot?</a>
          </div>

          <button type="submit" className="signin-button">Sign In</button>
        </form>

        <div className="signup-link">
          <p>Not a member? <a href="/signup">Sign up now</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
