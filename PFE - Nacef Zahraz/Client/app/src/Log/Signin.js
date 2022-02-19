import React from 'react'
import { useState } from "react";
import { register } from "../Auth/Redux/registerAction";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Signin = () => {

    const [fullname, setFullname] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = useSelector(state => state.registerStore);
    const dispatch = useDispatch();
      
    const signin = (e) => {
        e.preventDefault();
    
        const user = {
        fullname,
        phonenumber,
        email,
        password,
        };
        dispatch(register(user));
    };

    if (auth.authenticate) {
        return <Redirect to={`/login`} />;
    }
    

    return (
        <div className='contact-page'>
            <form method='post' className='contact-form' onSubmit={signin}>

                <h1 className='contact-header'>ResAvocat | Sign in </h1>

                <div className='contact-input-div'>
                    <input required type='text' className='contact-input' placeholder=' ' onChange={(e) => {setFullname(e.target.value);}}/>
                    <div className='contact-placeholder'>Fullname</div>
                </div>

                <div className='contact-input-div'>
                    <input required type='tel' className='contact-input' placeholder=' ' onChange={(e) => {setPhonenumber(e.target.value);}}/>
                    <div className='contact-placeholder'>Phone number</div>
                </div>

                <div className='contact-input-div'>
                    <input required type='email' className='contact-input' placeholder=' ' onChange={(e) => {setEmail(e.target.value);}}/>
                    <div className='contact-placeholder'>Email</div>
                </div>

                <div className='contact-input-div'>
                    <input required type='password' className='contact-input' placeholder=' ' onChange={(e) => {setPassword(e.target.value);}}/>
                    <div className='contact-placeholder'>Password</div>
                </div>
                
                <div className='contact-submit-div'>
                    <input required type='submit' value='Sign in' className='contact-submit'/>
                </div>

            </form>
        </div>
    )
}

export default Signin
