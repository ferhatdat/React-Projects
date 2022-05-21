import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Data from './Data'
import './style.css';


function App() {
  return (
    <div className="bg-info main" >
      <Navbar />
      <h1 className='text-center mt-5 display-3 fw-bolder'>Popular Tour Places</h1>
     <Card veri={Data}/>
    </div>
  )
}

export default App
