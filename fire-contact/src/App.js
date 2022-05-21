import logo from './logo.svg';
import './App.css';
import FormComponent from './components/form/FormComponent';
import Contacts from './components/contacts/Contacts';
import { useState } from 'react';
import { addUser, editUser } from './utils/functions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toastify from './utils/Toastify';

const initialValues = { username: '', phoneNumber: '', gender: ''}

function App() {
  const [info, setInfo] = useState(initialValues)
  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(info) 
    if(info.id){
      editUser(info)
      Toastify("Contact info's has been updated")
    } else {
      addUser(info)
      setInfo(initialValues)
    }
  }

  const editHandler = (id, username, phoneNumber, gender)=> {
    setInfo({id: id, username: username, phoneNumber: phoneNumber, gender: gender})
  }
  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleFormSubmit={handleFormSubmit}/>
      <Contacts editHandler = {editHandler}/>
      <ToastContainer />
    </div>
  );
}

export default App;
