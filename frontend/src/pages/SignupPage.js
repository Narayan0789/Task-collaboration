import React, { useState } from "react";
import API from "../services/api";

function SignupPage({ setShowLogin }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {

    try {

      await API.post("/auth/signup", {
        name,
        email,
        password
      });

      alert("Signup successful");

      setShowLogin(true);

    } catch {

      alert("Signup failed");

    }

  };

  return (
    <div className="section">

      <h2>Signup</h2>

      <input
        className="input"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        className="input"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        className="input"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button className="button" onClick={signup}>
        Signup
      </button>

    </div>
  );

}

export default SignupPage;
