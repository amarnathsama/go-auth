import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  async function fetchUser() {
    axios
      .get("http://localhost:8000/api/user", { withCredentials: true })
      .then((response) => {
        setUsername(response.data.username);
        console.log(username);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchUser();
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Nav name={username} setName={setUsername} />
        <main className="form-signin">
          <Routes>
            {/*addded new import above */}
            <Route path="/" element={<Home username={username} />} />
            <Route path="/login" element={<Login fetchUser={fetchUser} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
