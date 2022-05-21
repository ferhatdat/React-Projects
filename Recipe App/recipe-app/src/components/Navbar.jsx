import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
  return (
    <NAVBAR>
      <div>
        <Link to={'/recipe-app/home'} style={{fontSize:"2rem", color:"#078188"}}><span>{"<Ferhat/>"}</span>Recipe</Link>
      </div>
      <NavContent>
        <Link to={'/recipe-app/about'} >ABOUT</Link>
        <a href='https://github.com/ferhatdat'target="_blank" rel="noreferrer">GITHUB</a>
        <NavLink to={'/recipe-app/'}>LOGOUT</NavLink>
      </NavContent>
    </NAVBAR>
  )
}

const NAVBAR = styled.div`
  display:  flex;
  justify-content: space-between;
  align-items: center;
  background-color:#E0F1DD;
  width: 100%;
  padding: 1.7rem 3rem;
  span {
    color: #02475E;
  }
`

const NavContent = styled.div`
a {
  margin-right: 1rem;
  font-size: 1.7rem;
  text-decoration: none;
  padding: 1rem;
  font-weight: 700;
  color: #02475E;
  &:hover {
    color: #00ADB5;
    transition: all 0.2s ease-in-out;
  }

}
`

export default Navbar