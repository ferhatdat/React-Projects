import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Details from "./Details";
import Home from "./Home";
import Login from "./Login";

function Pages() {
  const [recipe, setRecipe] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/recipe-app/" exact element={<Login />} />
        <Route path="/recipe-app/home" element={<Home setRecipe = {setRecipe} recipe={recipe}/>} />
        <Route path="/recipe-app/details" element={<Details recipe={recipe} />}/>
        <Route path="/recipe-app/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
