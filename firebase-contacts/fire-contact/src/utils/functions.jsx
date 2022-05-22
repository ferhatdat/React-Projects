import app from './firebase'
import { getDatabase, set, ref, push, onValue, remove, update } from "firebase/database";
import { useEffect, useState } from 'react';
import Toastify from './Toastify';


export const addUser = (info) => {
    const db = getDatabase();
    const userRef = ref(db, 'firecontact');
    const newUserRef = push(userRef)
    set((newUserRef), {
        username: info.username,
        phoneNumber: info.phoneNumber,
        gender: info.gender,
    })
    Toastify("New user added")
}

export const useFetch = ()=> {
    const [isLoading, setIsLoading] = useState(false)
    const [contactList, setContactList] = useState([])

    useEffect(() => {
      setIsLoading(true)
      const db = getDatabase();
      const userRef = ref(db, 'firecontact');
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        const firecontactArray = []

        for(let id in data){
            firecontactArray.push({id, ...data[id]})
        }
        setContactList(firecontactArray)
        setIsLoading(false)
      });

    }, [])
    return {isLoading, contactList}
}

export const deleteUser = (id) => {
    const db = getDatabase();
    const userRef = ref(db, 'firecontact');
    remove(ref(db, 'firecontact/' + id))
    Toastify("User deleted successfully")
}

export const editUser = (info) => {
    const db = getDatabase();
    const updates = {};
    updates['firecontact/' +  info.id] = info;
    return update(ref(db), updates);
}