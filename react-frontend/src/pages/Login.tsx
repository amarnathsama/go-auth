import axios from "axios";
import React, { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { json } from "stream/consumers";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [invalidCred, setInvalidCred] = useState(false);
  const submit = (e: SyntheticEvent) => {
    setInvalidCred(false);
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        setLoggedIn(true);
      })
      .catch((err) => {
        setInvalidCred(true);
      });
  };

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ color: "red" }}>
          {invalidCred ? "invalid email or password" : ""}
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
