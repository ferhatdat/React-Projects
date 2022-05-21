import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  //   const currentUser = {displayName: 'ferhat gül'};
  //   const currentUser = false;
  const {currentUser} = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-light bg-primary">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand text-white">
          <h4>React Movie App</h4>
        </Link>
        {currentUser ? (
          <div className="d-flex align-items-center text-white">
            <h5 className="mb-0 text-capitalize">{currentUser?.displayName}</h5>
            <button
              className="btn btn-outline-light ms-2"
              type="submit"
              onClick={()=>logOut()}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="d-flex">
            <button
              className="btn btn-outline-light ms-2"
              onClick={() => navigate("/login")}
              type="submit"
            >
              Login
            </button>
            <button
              className="btn btn-outline-light ms-2"
              type="submit"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
