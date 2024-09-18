import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form className="form-box" onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <button type="submit">Signup</button>
      </form>
      <div className="form-options">
        <Link to="/login">Already have an account? Login</Link>
        <Link to="/forgotpassword">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default Signup;
