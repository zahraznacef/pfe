import { addLawyerURL, addUserURL, deleteContactURL, deleteLawyerURL, deleteUserURL, getallContactsURL, getallLawyersURL, getallUsersURL, updateContactURL, updateLawyerURL, updateUserURL, addContactURL } from "./ApiUrls"
import axios from "axios"

// Get all Users
export const getAllUsers = (setUsers) => {
    axios.get(getallUsersURL).then( res => {setUsers(res.data)
    })
}

// Delete User
export const deleteUser = (id) => {
    axios.delete(`${deleteUserURL}${id}`).then( () => {
        window.location.reload();
    })
}

// Update User
export const updateUser = (id,input) => {
    axios.put(`${updateUserURL}${id}`,input).then( () => {
        window.location.reload();
    })
}

// Add User
export const addUser = (input) => {
    axios.post(`${addUserURL}`,input)
}


// Add Contact
export const addContact = (input) => {
    axios.post(`${addContactURL}`,input)
}

// Get all Contacts
export const getAllContacts = (setContacts) => {
    axios.get(getallContactsURL).then( res => {setContacts(res.data)
    })
} 

// Update Contact
export const updateContact = (id,input) => {
    axios.put(`${updateContactURL}${id}`,input).then( () => {
        window.location.reload();
    })
}

// Delete Contact 
export const deleteContact = (id) => {
    axios.delete(`${deleteContactURL}${id}`).then( () => {
        window.location = window.location
    })
}



// Get all Lawyers
export const getAllLawyers = (setLawyers) => {
    axios.get(getallLawyersURL).then(res => {
        setLawyers(res.data)
    })
}

// Delete Lawyer
export const deleteLawyer = (id) => {
    axios.delete(`${deleteLawyerURL}${id}`).then( () => {
        window.location.reload();
    })
}

// Add Lawyer
export const addLawyer = (input) =>{
    axios.post(`${addLawyerURL}`,input)
}

// Update Lawyer 
export const updateLawyer = (id,input) => {
    axios.put(`${updateLawyerURL}${id}`,input).then( () => {
        window.location.reload();
    })
}