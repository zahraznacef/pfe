import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addContact} from '../Redux/Contact/actionContact'

const Contact = () => {

  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const dispatch = useDispatch();
    

  const addNewContact = () => {
    const contact = {
      fullname,
      message,
      email,
      subject
    }
    dispatch(addContact(contact));
  };

    return (
        <div className='contact-page'>
            <form className='contact-form' onSubmit={addNewContact}>
                
                <h1 className='contact-header'>ResAvocat | Contact </h1>

                <div className='contact-input-div'>
                    <input required type='text' name='name' className='contact-input' placeholder=' ' onChange={(e) => setFullname(e.target.value)}/>
                    <div className='contact-placeholder'>Fullname</div>
                </div>

                <div className='contact-input-div'>
                    <input required type='email' className='contact-input' placeholder=' ' onChange={(e) => setEmail(e.target.value)} name='email'/>
                    <div className='contact-placeholder'>Email</div>
                </div>

                <div className='contact-input-div'>
                    <input required type='text' className='contact-input' placeholder=' ' onChange={(e) => setSubject(e.target.value)} name='subject'/>
                    <div className='contact-placeholder'>Subjet</div>
                </div>

                <div className='contact-input-div'>
                    <input required type='text' className='contact-input' placeholder=' ' onChange={(e) => setMessage(e.target.value)} name='message'/>
                    <div className='contact-placeholder'>Message</div>
                </div>
                
                <div className='contact-submit-div'>
                    <input type='submit' className='contact-submit' value='Send' />
                </div>

            </form>
        </div>
    );
}

export default Contact;
