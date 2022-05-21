import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
  return (
    <Main>
        <Header />
        <Card />
        <Footer />
    </Main>
  )
}
 const Main = styled.div`
    position: relative;
    Header {
        position: absolute;
        top: 20%;
        left: 50%;
    }
 `

export default Home