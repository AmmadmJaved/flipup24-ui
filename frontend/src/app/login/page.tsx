'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/utils/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login submission logic here
    console.log("Username:", email);
    console.log("Password:", password);
    debugger;
    try {
          const token = await loginUser({ email, password });
          localStorage.setItem("token", token); // Save token to localStorage
          router.push("/"); // Redirect to the home page after successful login
        } catch (err: any) {
          setError(err.message);
        }
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <p>Not a member? <a href="/register">Sign up now</a></p>
          <p>Become a Partner? <a href="/become-a-partner">Register now</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
