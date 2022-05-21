import { ReactComponent as FooterIcon} from '../assets/design.svg'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Foot>
        <h4>{'<Ferhat/>'}</h4>
        <FooterIcon />
        <p>design</p>
    </Foot>
  )
}

const Foot = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 2rem;
width: 80%;
border: 1px solid purple;
border-radius: 5px;
margin: 0rem auto 1rem;
padding: .7rem 0;

svg {
    width: 4rem;
    height: auto;
}
h4{
    font-size: 2rem;
    color: gray;
    margin: 0;
}
p {
    font-size: 2rem;
    color: purple;
    margin: 0;
}
`

export default Footer