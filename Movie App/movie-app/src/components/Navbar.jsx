import React, { useContext, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { logOut } from '../auth/firebase';
import { AuthContext } from '../context/AuthContext';

const Navbar = ({showDetails, setShowDetails}) => {
  const {currentUser} = useContext(AuthContext)
       
  return (
    <div className='container-fluid bg-primary d-flex justify-content-between align-items-center p-4'>
        <div>
            <NavLink to='/home' className="text-light text-decoration-none h3" href="">React Movie APP</NavLink>
        </div>
        <div className ="d-flex align-items-center">
          {currentUser ? <p className="text-light rounded m-0 me-2">{currentUser.displayName}</p> : <NavLink to='/login' className="text-light text-decoration-none border border-light p-2 rounded ms-2" href="">Log In</NavLink>}
          {currentUser ? <NavLink to='/' className="text-light text-decoration-none  ms-2 border border-light p-2 rounded" href="" onClick={()=>logOut()}>LogOut</NavLink> : <NavLink to='/register' className="text-light text-decoration-none  ms-2 border border-light p-2 rounded" href="">Register</NavLink>}
        </div>

    </div>
  )
}

export default Navbar