import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import styled from "styled-components";
import "@splidejs/react-splide/css/sea-green";
import { Link } from "react-router-dom";

function Veggie() {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const local = localStorage.getItem("veggie");
    if (local) {
      setVeggie(JSON.parse(local));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      setVeggie(data.recipes);
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
    }
  };

  return (
    <Wrapper>
      <h3>Our Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {veggie.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Link to={'/recipe/' + recipe.id}>
              <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
              </Card>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 5;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, 0);
    color: white;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
