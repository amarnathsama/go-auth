import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      {/* <div>hiiiiiiiiiiii</div> */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
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
        </div>
      </nav>
    </div>
  );
};
export default Nav;
