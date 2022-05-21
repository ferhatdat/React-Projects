import React from 'react'
import { useState } from 'react'
import './cards.css'

const Cards = (props) => {
    console.log(props.cardOptions);
    const [changer, changeState] = useState(true)

    const showContent = ()=>{
        changeState(!changer)
    }
    return (
          <div className='myCard'>
              {changer ? (<div className="myCard" onClick={showContent}>
                <img src={props.cardImg} className="myImg" alt="lang" />
                   
                        <h5 className="myTitle">{props.cardName}</h5>
                   
            </div>) : (<div className="card myUL" onClick={showContent}>
                    <ul>
                    {props.cardOptions.map((item)=> <li>{item}</li> )}
                    </ul>
            
            </div>)}
          </div>
    )
}

export default Cards