import categories from './data.js'
import Cards from './components/cards/Cards.js';
import './app.css'

import Header from './components/header/Header.js';
import Logo from './components/logo/Logo.js';


function App(props) {
  return(
  <>
    <Logo logoImg='./assets/react.svg' />
    <div className="appContainer">
    <Header />
    {categories.map((item)=>{
    const {name, img, options}  = item
    return(
      <div className='myContainer'>
        <Cards cardName = {name} cardImg = {img} cardOptions = {options} />
      </div>
    )
  })}
  </div>
  </>
  )}

export default App;
