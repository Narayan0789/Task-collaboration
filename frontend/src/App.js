import React, { useState } from "react";
import "./App.css";

import BoardPage from "./pages/BoardPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {

  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  const [showLogin, setShowLogin] = useState(true);

  if (!loggedIn) {

    return (
      <div className="app-container">

        <h1 className="main-heading">
          Task Collaboration Platform
        </h1>

        {showLogin ? (

          <>
            <LoginPage setLoggedIn={setLoggedIn} />
            <p onClick={() => setShowLogin(false)}>
              Create account
            </p>
          </>

        ) : (

          <>
            <SignupPage setShowLogin={setShowLogin} />
            <p onClick={() => setShowLogin(true)}>
              Already have account? Login
            </p>
          </>

        )}

      </div>
    );

  }

  return (
    <div className="app-container">

      <button
        className="button"
        onClick={() => {
          localStorage.removeItem("token");
          setLoggedIn(false);
        }}
      >
        Logout
      </button>

      <BoardPage />

    </div>
  );

}

export default App;
