import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyles";
import homeSvg from "../../assets/home.svg";
import RecipeCardComp from "./RecipeCardComp";

const Home = () => {
  const [query, setQuery] = useState("");
  const [food, setFood] = useState([]);
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [meal, setMeal] = useState("breakfast");
  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query) {
      const result = await axios.get(url);
      setFood(result.data.hits);
    } else {
      alert("Please fill the form");
    }
  };
  return (
    <div>
      <Header
        setQuery={setQuery}
        setMeal={setMeal}
        getData={getData}
        mealTypes={mealTypes}
      />
      {food.length ? (
        <MainContainer>
          {food.map((recipe, index) => 
          <RecipeCardComp key={index} recipe={recipe.recipe}/>
          )}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
