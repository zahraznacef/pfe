

import fetchAddContact from '../../Request/request'

export const addContact = (fullname, email, subject, message)=> async (dispatch) =>{
    try{
        const res = fetchAddContact( fullname , email , subject , message)
        dispatch ({
            type:"ADD_CONTACT_SUCCEED",
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}