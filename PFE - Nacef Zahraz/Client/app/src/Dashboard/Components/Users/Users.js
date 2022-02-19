import React, {useState , useEffect} from 'react'
import { getAllUsers } from '../../Request/Request';
import UpdateUsers from './UpdateUsers';

const Users = () => {

    // Get all Users
    const [users,setUsers] = useState([]);

    useEffect( () => {
        getAllUsers(setUsers)
    }, [])
    

    return (
        <div className='dashboard-lawyers'>
            {users.map( el => (
                <div className='dashboard-lawyers-card'>
                    <div className='dashboard-user-card-content'>
                        <p>{el.fullname}</p>
                        <p>{el.phonenumber}</p>
                        <p>{el.email}</p>
                    </div>
                    <UpdateUsers props={el} _id={el._id}/>
                </div>
            ))}
        </div>
    )
}

export default Users;
