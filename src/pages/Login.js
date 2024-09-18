import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form className="form-box" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <div className="form-options">
        <Link to="/signup">Don't have an account? Signup</Link>
        <Link to="/forgotpassword">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default Login;
