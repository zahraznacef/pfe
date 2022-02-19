import React, {useState , useEffect} from 'react'
import { getAllContacts } from '../../Request/Request';
import UpdateContacts from './UpdateContacts';

const Contacts = () => {

    // Get all ContactgetAllContacts
    const [contacts,setContacts] = useState([]);

    useEffect( () => {
        getAllContacts(setContacts)
    }, [])
    

    return (
        <div className='dashboard-lawyers'>
            {contacts.map( el => (
                <div className='dashboard-lawyers-card'>
                    <div className='dashboard-user-card-content'>
                        <p>{el.fullname}</p>
                        <p>{el.email}</p>
                        <p>{el.subject}</p>
                        <p>{el.message}</p>
                    </div>
                    <UpdateContacts props={el} _id={el._id}/>
                </div>
            ))}
        </div>
    )
}

export default Contacts;