import React from "react";
import { HeaderContainer, MainHeader } from "./HeaderStyles";
import Form from "./Form";

const Header = ({ setMeal, setQuery, getData, mealTypes }) => {
  return (
    <HeaderContainer>
      <MainHeader>Food App</MainHeader>
      <Form
        setQuery={setQuery}
        setMeal={setMeal}
        getData={getData}
        mealTypes={mealTypes}
      />
    </HeaderContainer>
  );
};

export default Header;
