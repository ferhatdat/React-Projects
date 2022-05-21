import { useState } from "react";
import { Card, Form, Button, Container } from "react-bootstrap"
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signIn, signUpProvider } from "../auth/firebase";



function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const goHomePage = (e) => {
        e.preventDefault()
        signIn(email, password, navigate)
    }
    const handleProviderLogin = () => {
      signUpProvider(navigate)
    }

  return (
  
    <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'100vh'}}>
        <div className="w-100" style={{maxWidth:'400px'}}>
      <Card >
        <Card.Body>
            <h2 className='text-center mb-4'>Log In</h2>
            <Form>
                <Form.Group id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email'  onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group id='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password'  onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                <Button className='w-100 mt-2' type='submit' onClick={goHomePage}>Log In</Button>
            </Form>
            <Button className='w-100 mt-2' type='button' onClick={handleProviderLogin}>Continue with Google</Button>
        </Card.Body>
      </Card>
      
      <div className="w-100 text-center mt-2">
        Need an account? <Link to='/register'>Sign Up</Link> 
      </div>
      </div>
    </Container>
  );
}

export default Login;
