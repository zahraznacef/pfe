import React, { useEffect } from 'react';
import { deleteContact, updateContact } from '../../Request/Request';
import { ReactComponent as Close } from '../../../Svg/minus-round-line.svg'
import { useState } from 'react';

const UpdateUsers = ({props,_id}) => {

    // Update
    const [contact,setContact] = useState({
        fullname : props.fullname,
        email : props.email,
        subject : props.subject,
        message : props.message
    })


    const updateOnClick = () => {
        let i = 0;
        document.querySelectorAll(".dashboard-update-contacts").forEach( el => {
            document.querySelectorAll(".update-contact")[i].onclick = () => {
                el.classList.add("update-flex");
                document.querySelector("body").classList.remove("overflow-hidden");
            }
            i++
        })
    }


    // Hide Adding Form
    const hideForm = () => {
        document.querySelector(".update-flex").classList.remove("update-flex")
        document.querySelector("body").classList.remove("overflow-hidden")
    }
    
    
    useEffect(() => {
        updateOnClick()
    }, [])

    
    return (
        <>
            <div className='dashboard-lawyers-card-toolkit'>

                <button className='update button update-contact'>Update</button>
                <button className='delete button' onClick={() => deleteContact(_id)}>Delete</button>

            </div>
            <div className='dashboard-update dashboard-update-contacts'>

                <form className='dashboard-update-form' onSubmit={() => updateContact(_id,contact)}>

                    <div className='form-exit' onClick={() => hideForm()}>
                        <Close className="close-form"/>
                    </div>

                    <div className='contact-input-div'>
                        <input required type='text' className='contact-input' placeholder=' ' onChange={(e) => setContact({...contact,fullname:e.target.value})} defaultValue={contact.fullname} />
                        <div className='contact-placeholder'>Fullname</div>
                    </div>

                    <div className='contact-input-div'>
                        <input required type='text' className='contact-input' placeholder=' ' onChange={(e) => setContact({...contact,email:e.target.value})} defaultValue={contact.email} />
                        <div className='contact-placeholder'>Phone number</div>
                    </div>

                    <div className='contact-input-div'>
                        <input required type='text' className='contact-input' placeholder=' ' onChange={(e) => setContact({...contact,subject:e.target.value})} defaultValue={contact.subject} />
                        <div className='contact-placeholder'>Email</div>
                    </div>

                    <div className='contact-input-div'>
                        <input required type='text' className='contact-input' placeholder=' ' onChange={(e) => setContact({...contact,message:e.target.value})} defaultValue={contact.message} />
                        <div className='contact-placeholder'>Message</div>
                    </div>

                    <div className='contact-submit-div'>
                        <input type='submit' className='contact-submit' value='Update' />
                    </div>


                </form> 

            </div> 
        </>
    )
};

export default UpdateUsers;
