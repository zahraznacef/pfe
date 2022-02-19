import React from 'react'
import { loginAdmin } from '../Auth/Redux/adminLoginAction'
import {useDispatch,useSelector} from 'react-redux'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Admin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
     const auth = useSelector(state => state.adminstore)
    const dispatch = useDispatch()
    
    const userLogin = (e) =>{
        e.preventDefault()
        const user = {
            email,
            password
        }
        dispatch(loginAdmin(user))
    }
  
    if(auth.authenticate){
        return <Redirect to={`/dashboard`} />
    }


    return (
        <div className='contact-page'>
            <form method='post' className='contact-form' onSubmit={userLogin}>
                
                <h1 className='contact-header'>ResAvocat | Admin Login </h1>

                <div className='contact-input-div'>
                    <input required type='email' className='contact-input' placeholder=' ' onChange={(e) => {setEmail(e.target.value)}}/>
                    <div className='contact-placeholder'>Email</div>
                </div>

                <div className='contact-input-div'>
                    <input required type='password' className='contact-input' placeholder=' ' onChange={(e) => {setPassword(e.target.value)}}/>
                    <div className='contact-placeholder'>Password</div>
                </div>
                
                <div className='contact-submit-div'>
                    <input required type='submit' value='Login' className='contact-submit'/>
                </div>

            </form>
        </div>
    )
}

export default Admin
