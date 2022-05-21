import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Search = ({handleSubmit}) => {
   const {setSearchTerm, searchTerm} = useContext(AuthContext)
  return (

    <div className="container-sm">
    <form className="d-flex align-items-center justify-content-center" onSubmit={handleSubmit}>
      <input className="form-control me-2" type="search" placeholder="Search a movie" aria-label="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      <button className="btn btn-outline-primary" type="submit">Search</button>
    </form>
  </div>
  )
}

export default Search