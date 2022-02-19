import React from 'react'
import jwt from 'jwt-decode';


const Profile = () => {

    const result = localStorage.getItem('token');
    const token = jwt(result)

    return (
        <div className='main-homepage'>
           <h1 className='main-homepage-header'>Welcome {token.fullname} </h1> 
           <p className='about-span'>Email : {token.email}</p>
           <p className='about-span'>Phone number : {token.phonenumber}</p>
        </div>
    )
}

export default Profile