import React, { useEffect } from 'react';
import { deleteUser, updateUser } from '../../Request/Request';
import { ReactComponent as Close } from '../../../Svg/minus-round-line.svg'
import { useState } from 'react';

const UpdateUsers = ({props,_id}) => {

    // Update
    const [user,setUser] = useState({
        fullname : props.fullname,
        phonenumber : props.phonenumber,
        email : props.email,
        password : props.password
    })


    const updateOnClick = () => {
        let i = 0;
        document.querySelectorAll(".dashboard-update-users").forEach( el => {
            document.querySelectorAll(".update-user")[i].onclick = () => {
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

                <button className='update button update-user'>Update</button>
                <button className='delete button' onClick={() => deleteUser(_id)}>Delete</button>

            </div>
            <div className='dashboard-update dashboard-update-users'>

                <form className='dashboard-update-form' onSubmit={() => updateUser(_id,user)}>

                    <div className='form-exit' onClick={() => hideForm()}>
                        <Close className="close-form"/>
                    </div>

                    <div className='contact-input-div'>
                        <input required type='text' className='contact-input' placeholder=' ' onChange={(e) => setUser({...user,fullname:e.target.value})} defaultValue={user.fullname} />
                        <div className='contact-placeholder'>Fullname</div>
                    </div>

                    <div className='contact-input-div'>
                        <input required type='text' className='contact-input' placeholder=' ' onChange={(e) => setUser({...user,phonenumber:e.target.value})} defaultValue={user.phonenumber} />
                        <div className='contact-placeholder'>Phone number</div>
                    </div>

                    <div className='contact-input-div'>
                        <input required type='text' className='contact-input' placeholder=' ' onChange={(e) => setUser({...user,email:e.target.value})} defaultValue={user.email} />
                        <div className='contact-placeholder'>Email</div>
                    </div>

                    <div className='contact-input-div'>
                        <input required type='text' className='contact-input' placeholder=' ' onChange={(e) => setUser({...user,password:e.target.value})} defaultValue={user.password} />
                        <div className='contact-placeholder'>Password</div>
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
