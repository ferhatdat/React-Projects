import { useState } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../auth/firebase";

function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const goHomePage = (e) => {
    const displayName = `${firstName} ${lastName}`
    e.preventDefault();
    createUser(email, password, displayName, navigate)
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form onSubmit={goHomePage}>
              <Form.Group id="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" onChange={(e)=>setFirstName(e.target.value)}/>
              </Form.Group>
              <Form.Group id="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" onChange={(e)=>setLastName(e.target.value)}/>
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)}/>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)}/>
              </Form.Group>
              <Button className="w-100 mt-2" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </Container>
  );
}

export default Register;
