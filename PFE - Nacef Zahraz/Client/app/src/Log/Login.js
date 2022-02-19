import React from 'react'
import { login } from '../Auth/Redux/signinAction'
import {useDispatch,useSelector} from 'react-redux'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
     const auth = useSelector(state => state.signinStore)
    const dispatch = useDispatch()
    
    const userLogin =(e)=>{
        e.preventDefault()
        const user = {
            email,
            password
        }
        dispatch(login(user))
  
    } 
  
    if(auth.authenticate){
        return <Redirect to={`/profile`} />
    }


    return (
        <div className='contact-page'>
            <form method='post' className='contact-form' onSubmit={userLogin}>
                
                <h1 className='contact-header'>ResAvocat | Login </h1>

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

export default Login
