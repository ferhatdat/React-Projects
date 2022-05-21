import React from "react";
import styled from "styled-components";
import { ReactComponent as DetailIcon } from "../assets/diet.svg";
import Navbar from "../components/Navbar";


function Details({ recipe }) {
  console.log(recipe);

  return (
      <>
      <Navbar />
    <Container>
        <Header>
          <h2>{recipe.recipe.label}</h2>
            <DetailIcon />
        </Header>
        <Content>
          <div>
            <h4>Ingredients</h4>
            <ul>
            {recipe.recipe.ingredientLines.map((element) => (
              <li>{element}</li>
            ))}
            </ul>
          </div>
          <img src={recipe.recipe.image} />
        </Content>
    </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #48c3c9;
  min-height: 100vh;
  max-width: 100vw;

`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 10rem;
  position: relative;
  svg {
      position: absolute;
      top: 0;
      right: 60px;
      width: 20rem;
      height: 14rem;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  margin-top: 1rem;
  position: relative;
  outline: 2px solid white;
  padding: 1rem;
  img {
      width: 20rem;
  }
  li {
      line-height: 2;
  }
  h4 {
      text-align: center;
  }
`;
export default Details;
