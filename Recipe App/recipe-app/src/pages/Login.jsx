import React from "react";
import { ReactComponent as LoginIcon } from "../assets/meal2.svg";
import styled from "styled-components";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const goHomePage = (e) => {
    navigate("/recipe-app/home");
    e.preventDefault();
  };

  return (
    <Main>
      <div>
        <LoginIcon style={{ width: "13rem"}} />
        <h2>{"<FERHAT/>"} Recipe</h2>
        <FormStyle>
          <input type="text" placeholder="USERNAME" />
          <input type="password" placeholder="PASSWORD" />
          <button type="submit" onClick={goHomePage}>
            LOGIN
          </button>
        </FormStyle>
      </div>
    </Main>
  );
}
const Main = styled.div`
  background-image: url("https://picsum.photos/1600/900");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 550px;
    height: 550px;
    background-color: rgba(0, 172, 180, 0.6);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        color: #f3f3f3;
        font-size: 2rem;
        margin: .6rem 0  0;
    }
  }

  svg {
    height: 200px;
  }
`;

const FormStyle = styled.form`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 250px;
  input {
    font-size: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    width: 100%;
    border: none;
    outline: none;
    background: rgba(49, 49, 49, 0.8);
    color: white;
  }
  button {
    font-size: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    width: 200px;
    color: #f3f3f3;
    background: rgba(49, 49, 49, 0.8);
    border: 2px solid black;
    cursor: pointer;
    border: none;
    width: 100%;
    font-weight: 600;
  }
`;

export default Login;
