import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
const Nav = (props: { name: string; setName: (name: string) => void }) => {
  const handleLogout = () => {
    axios
      .post("http://localhost:8000/api/logout", {
        withCredentials: true,
      })
      .then(() => {
        props.setName("");
      });
  };

  let menu;

  if (props.name == "") {
    menu = (
      <div className="navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <li className="nav-link active" aria-current="page">
              <Link to="/login">Login</Link>
            </li>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
        </ul>
      </div>
    );
  } else {
    menu = (
      <div className="navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <li className="nav-link active" aria-current="page">
              <button onClick={handleLogout}>Logout</button>
            </li>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          {menu}
        </div>
      </nav>
    </div>
  );
};
export default Nav;
