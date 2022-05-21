import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../auth/firebase";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  
  const handleSubmit = (e)=> {
    const displayName = `${firstName} ${lastName}`
      e.preventDefault()
      createUser(email, password, displayName, navigate)
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="form-image">
        <img src="https://picsum.photos/800/800" alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="first-name"
              placeholder="Enter Your First Name..."
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="last-name"
              placeholder="Enter Your Last Name..."
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Your Email..."
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Your Password..."
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <input type="submit" value="Register" className="btn btn-primary form-control"/>
        </form>
      </div>
    </div>
  );
};

export default Register;
