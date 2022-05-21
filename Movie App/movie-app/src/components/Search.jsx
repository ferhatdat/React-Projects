import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


const Search = () => {
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const [input, setInput] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    if(currentUser){
        navigate('/searched/' + input)
    }
    else {
        alert('Please Log In to search a movie')
    }
    
}
  return (
    <form onSubmit={submitHandler}>
        <div className='row mb-5 bg-secondary'>
            <div className="col-3 mx-auto p-3">
                <input type="text" className="form-control" placeholder='Search a movie' onChange={(e)=> setInput(e.target.value)}/>
            </div>
        </div>
    </form>
  )
}

export default Search