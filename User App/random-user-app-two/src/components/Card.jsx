import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { ReactComponent as ManIcon } from "../assets/man.svg";
import { ReactComponent as WomanIcon } from "../assets/woman.svg";
import { ReactComponent as PasswordIcon } from "../assets/padlock.svg";
import { ReactComponent as MailIcon } from "../assets/mail.svg";
import { ReactComponent as PhoneIcon } from "../assets/phone.svg";
import { ReactComponent as StreetIcon } from "../assets/map.svg";
import { ReactComponent as AgeManIcon } from "../assets/growing-up-man.svg";
import { ReactComponent as AgeWomanIcon } from "../assets/growing-up-woman.svg";

const Card = () => {
  const [user, setUser] = useState([]);
  const [iconInfo, setIconInfo] = useState('')
  const [infoType, setInfoType] = useState('')
  const [localUsers, setLocalUsers] = useState([])
  const [table, setTable] = useState(false)

  const whichOne = (e)=>{
      if(e.target.id === "1" || e.target.id === "2"){
          setInfoType('name')
      } else if (e.target.id === "3"){
        setInfoType('email')
      } else if (e.target.id === "4" || e.target.id === "5"){
        setInfoType('age')
      } else if (e.target.id === "6"){
        setInfoType('street')
      }else if (e.target.id === "7"){
        setInfoType('phone')
      }else if (e.target.id === "8"){
        setInfoType('password')
      }
  }
  const getData = async () => {
    const response = await axios("https://randomuser.me/api/");
    setUser(response.data.results[0]);
  };
  const newUser = () => {
      getData()
      setIconInfo('')

  }
  const saveLocal = async () => {
    const localUsers = JSON.parse(localStorage.getItem("localUsers"));
    setLocalUsers(localUsers.push([user.name.first, user.email, user.phone, user.dob.age]))
    localStorage.setItem('localUsers', JSON.stringify(localUsers))
    setTable(true)
  };
  
  useEffect(() => {
    getData();
    localStorage.clear()
    localStorage.setItem('localUsers', JSON.stringify([]))
  }, []);
  return (
    <Container>
      <ImageSec>
        <img src={user?.picture?.large} alt="" />
      </ImageSec>
      <InfoSec>
        <p>My {infoType === '' ? 'name' : infoType} is</p>
        <h4>{iconInfo === '' ? user?.name?.first : iconInfo}</h4>
      </InfoSec>
      <IconSec onMouseOver={whichOne}>
        {user?.gender === "male" ? <ManIcon id="1" onMouseOver={(e)=>(setIconInfo(user.name.first))}/> : <WomanIcon id="2" onMouseOver={(e)=>setIconInfo(user.name.first)}/>}
        <MailIcon id="3" onMouseOver={(e)=>setIconInfo(user.email)}/>
        {user?.gender === "male" ? <AgeManIcon id="4" onMouseOver={(e)=>setIconInfo(user.dob.age)}/> : <AgeWomanIcon id="5" onMouseOver={(e)=>setIconInfo(user.dob.age)}/>}
        <StreetIcon id="6" onMouseOver={(e)=>setIconInfo(user.location.street.name)}/>
        <PhoneIcon id="7" onMouseOver={(e)=>setIconInfo(user.phone)}/>
        <PasswordIcon id="8" onMouseOver={(e)=>setIconInfo(user.login.password)}/>
      </IconSec>
      <ButtonSec>
        <button onClick={newUser}>NEW USER</button>
        <button onClick={saveLocal}>ADD USER</button>
      </ButtonSec>
      <TableSec>
          {table && <table>
              <tr>
                  <th>First Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Age</th>
              </tr>
              {JSON.parse(localStorage.getItem("localUsers"))?.map(item =>
                <tr>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                    <td>{item[2]}</td>
                    <td>{item[3]}</td>
                </tr>
                )}
          </table>}
          
      </TableSec>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:600px;
  margin: 0 auto;
  border: 1px solid purple;
  position: relative;
  top: -8rem;
  z-index: 3;
  background-color: white;
  box-shadow: 10px 10px 5px gray;
  border-radius: .5rem;
  padding: .5rem;
`;
const ImageSec = styled.div`
  img {
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
  }
`;
const InfoSec = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  h4 {
      margin: 0
  }
`;
const IconSec = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 4rem;
  svg {
    width: 4rem;
    height: auto;
    box-shadow: 5px 5px gray;
    border-radius: 50%;
  }
`;
const ButtonSec = styled.div`
  display: flex;
  justify-content:center;
  gap: 5rem;
  width: 100%;
  margin: 4rem 0 2rem;
  button {
    padding: .5rem 2rem;
    color: white;
    background: purple;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
    border-radius: 5px;
    font-size: 1.2rem;
    border: none;
    outline: none;
    &:hover {
        background: #FEC861;
        color: black;
        transition: .2s ease-in-out;
    }
  }
`;
const TableSec = styled.div`
    width: 100%;
 

table {
  border-collapse: collapse;
  width: 80%;
  margin: 2rem auto;
  color: black;
  font-size: 1.2rem;
  
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}

th {
  background-color: #FEC861;
  color: black;
}
`

export default Card;
