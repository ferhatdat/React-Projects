import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { ReactComponent as EmailIcon } from "./assets/email.svg";
import { ReactComponent as LocationIcon } from "./assets/location.svg";
import { ReactComponent as PhoneIcon } from "./assets/phone.svg";
import { Button } from '@mui/material'

function App() {
  const [user, SetUser] = useState([])

  const fetchData = async () => {
    const response = await axios('https://randomuser.me/api/')
    SetUser(response.data.results[0])
  }

  const randomUser = () => {
    fetchData()
  }
  

  useEffect(() => {
    fetchData()
  }, [])



  console.log(user);
  return (
    <div className="App">
      <div className="main">
        {user.name && (<>
          <div className='mainInfo'>
            <div className="infoGroup">
              <img src={user.picture.medium} alt="user" style={{ borderRadius: "50%" }} />
              <EmailIcon style={{ width: "30px", height: "30px" }} />
              <PhoneIcon style={{ width: "30px", height: "30px" }} />
              <LocationIcon style={{ width: "30px", height: "30px" }} />
            </div>
            <div className="infoGroup">
              <h2>{user.name.title + " " + user.name.first + " " + user.name.last}</h2>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.location.state + "-" + user.location.country}</p>
            </div>
          </div>
          <div className="infoGroupBottom">
            <p>Age:{user.dob.age}</p>
            <p>Register Date: {user.registered.date.slice(0, 10)}</p>
          </div>
        </>)}
      </div>
      <Button onClick={randomUser} variant="contained" className='btn' style={{margin:"1rem auto"}}>Random User</Button>
    </div>

  );
}

export default App;
