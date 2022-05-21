import React from 'react'
import { ReactComponent as CwIcon} from '../assets/cw.svg'
import styled from 'styled-components'

const Header = () => {
  return (
    <Head>
        <CwIcon />
    </Head>
  )
}

const Head = styled.div`
    padding: 3rem 0 10rem 0;
    width: 100%;
    background-color: #FEC861;
    svg {
        display: block;
        width: 5rem;
        margin: 0rem auto;
        height: 10rem;
    }

`

export default Header