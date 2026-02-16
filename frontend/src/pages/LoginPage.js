import React, { useState } from "react";
import API from "../services/api";

function LoginPage({ setLoggedIn }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    try {

      const res = await API.post("/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);

      setLoggedIn(true);

    } catch (err) {

      alert("Login failed");

    }

  };

  return (
    <div className="section">

      <h2>Login</h2>

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

      <button className="button" onClick={login}>
        Login
      </button>

    </div>
  );

}

export default LoginPage;
