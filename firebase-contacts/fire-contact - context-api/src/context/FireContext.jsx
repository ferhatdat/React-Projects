import { createContext, useState } from "react";
import { addUser, editUser } from "../utils/functions";
import Toastify from "../utils/Toastify";

export const FireContext = createContext();

const initialValue = {username: '', phoneNumber: '', gender: ''}

const FireContextProvider = (props) => {
    const [info, setInfo] = useState(initialValue)

    const handleUser = (e) => {
        e.preventDefault()
        if(info.id){
           editUser(info) 
           Toastify("User Info's updated succesfully")
        } else {
            addUser(info, setInfo)
            Toastify("User Info's added succesfully")
        }
        
    }
    const editHandler = (id, username, phoneNumber, gender)=>{
        setInfo({id, username, phoneNumber, gender})
    }
    return (
        <FireContext.Provider value={{info, setInfo, handleUser, editHandler}}>
            {props.children}
        </FireContext.Provider>
    )
}

export default FireContextProvider