import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <h2>Forgot Password</h2>
      <form className="form-box" onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <div className="form-options">
        <Link to="/login">Back to Login</Link>
        <Link to="/signup">Create a new account</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
