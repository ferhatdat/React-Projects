import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
      <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item mx-3">
              <a className="nav-link text-light height fs-3" href="#">
                ABOUT US
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-light height fs-3" href="#">
                FOR YOU
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-light height fs-3" href="#">
                SERVICES
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-light height fs-3" href="#">
                BLOG
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-light height fs-3" href="#">
                VLOG
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-light height fs-3" href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;
