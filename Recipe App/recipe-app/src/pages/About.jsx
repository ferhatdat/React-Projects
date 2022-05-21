import { ReactComponent as AboutIcon } from "../assets/coding.svg";
import styled from "styled-components";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <Main>
        <AboutIcon />
        <h2>
          About Software Developer<span>Ferhat</span>
        </h2>
        <div>
          <p>Hi I'm Ferhat</p>
          <p>I’m currently learning Full-Stack.</p>
          <p>I know JS, ReactJS, Django, Python, HTML, CSS</p>
          <p>
            <span>Send email:</span>ferhatgul466@gmail.com
          </p>
        </div>
      </Main>
    </>
  );
}
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #48c3c9;
  max-width: 100vw;
  svg {
    width: 40rem;
    height: 25rem;
  }
  div {
    width: 40%;
    border: 1px solid white;
    margin: 1rem auto;
    padding: 1rem;
  }
  h2 {
    color: black;
    text-align: center;
    font-size: 2rem;
  }
  p {
    text-align: right;
    font-size: 1.2rem;
    font-weight: 600;
  }
  span {
    color: #d6d4d4;
    padding: 0 1rem;
  }
`;
export default About;
