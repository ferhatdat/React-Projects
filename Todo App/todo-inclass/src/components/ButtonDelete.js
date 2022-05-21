import React from 'react'

const ButtonDelete = ( {deleteAllTasks}) => {
    return (
        <div style={{display:"flex"}}>
            <button className='btn' style={{backgroundColor:"red", margin:"1rem auto"}} onClick={deleteAllTasks}>Delete All Tasks</button>
        </div>
    )
}
export default ButtonDelete