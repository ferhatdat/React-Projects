import React from 'react'

const Button = ({ toggleShow, color, text }) => {

    return (
        <div>
            <button className='btn' onClick={toggleShow} style={{backgroundColor:color}}>{text}</button>
        </div>
    )
}

export default Button