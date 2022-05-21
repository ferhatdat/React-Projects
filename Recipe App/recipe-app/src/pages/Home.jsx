import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { ReactComponent as HomeIcon } from "../assets/home.svg";

const Home = ({recipe, setRecipe}) => {
  const [inputText, setInputText] = useState("");
  const [selectItem, setSelectItem] = useState("breakfast");
  const [recipes, setRecipes] = useState([]);
  const baseURL = `https://api.edamam.com/search?q=${inputText}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&mealType=${selectItem}`;
  
  useEffect(() => {
    if (inputText.length){
        getData();
    }
  }, []);

  const getData = async () => {
    const response = await axios(baseURL);
    setRecipes(response.data.hits);
  };
 

  const submitHandle = (e) => {
    e.preventDefault();
    getData();
  };

  const updateRecipe = (sth)=>{
      setRecipe(sth)
  }
  console.log(recipe);

  return (
    <>
      <Navbar />
      <Header
        setInputText={setInputText}
        setSelectItem={setSelectItem}
        submitHandle={submitHandle}
      />
      {recipes.length ? (<Grid>
        {recipes.map((item, i) => (
          <Card key={i}>
            <h4>{item.recipe.label}</h4>
            <img src={item.recipe.image} alt="cuisine" />
            <Link to={"/recipe-app/details"}><button onClick={()=>updateRecipe(item)}>View More</button></Link>
          </Card>
        ))}
      </Grid>) : <HomeIcon style={{backgroundColor:"#48c3c9", width: "100%"}}/>}
      
    </>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap: 3rem;
  background-color: #48c3c9;
  padding: 1rem;
  min-height: 100vh;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 1rem;
    width: 100%;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
  button {
    font-size: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 2px solid black;
    cursor: pointer;
    border: none;
    font-weight: 600;
    margin-top: 0.5rem;
  }
`;

export default Home;
