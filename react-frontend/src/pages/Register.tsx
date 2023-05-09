import axios from "axios";
import React, { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import API_URL from "../components/static";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, SetRegistered] = useState(false);
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/api/register`, {
        username,
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        SetRegistered(true);
      });
  };
  if (registered) return <Navigate to="/login" />;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please register</h1>
        <input
          type="username"
          className="form-control"
          placeholder="abcd"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Register;
