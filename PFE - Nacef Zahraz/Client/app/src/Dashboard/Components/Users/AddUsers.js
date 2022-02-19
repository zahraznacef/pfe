import React, {useState} from 'react'
import { ReactComponent as Close } from '../../../Svg/minus-round-line.svg'
import { addUser } from '../../Request/Request'

const AddUsers = () => {


    // Hide Adding Form
    const hideForm = () => {
        document.querySelector(".dashboard-user-add").classList.remove("flex")
        document.querySelector("body").classList.remove("overflow-hidden")
    }


    // Add Lawyer
    const [input,setInput] = useState({
        fullname:'',
        phonenumber:'',
        email:'',
        password:''
    })


    return (
        <div className='dashboard-add dashboard-user-add'>

            <form className='dashboard-update-form' onSubmit={() => addUser(input)}>
                <div className='form-exit' onClick={hideForm}>
                    <Close className="close-form"/>
                </div>
                
                <div className='contact-input-div'>
                    <input required type='text' className='contact-input' placeholder=' ' onChange={(e) =>  setInput({...input,fullname:e.target.value})}/>
                    <div className='contact-placeholder'>Fullname</div>
                </div>

                <div className='contact-input-div'>
                    <input required type='text' className='contact-input' placeholder=' ' onChange={(e) =>  setInput({...input,phonenumber:e.target.value})}/>
                    <div className='contact-placeholder'>Phone Number</div>
                </div>

                <div className='contact-input-div'>
                    <input required type='text' className='contact-input' placeholder=' ' onChange={(e) =>  setInput({...input,email:e.target.value})}/>
                    <div className='contact-placeholder'>Email</div>
                </div>

                <div className='contact-input-div'>
                    <input required type='text' className='contact-input' placeholder=' ' onChange={(e) =>  setInput({...input,password:e.target.value})}/>
                    <div className='contact-placeholder'>Password</div>
                </div>

                <div className='contact-submit-div'>
                    <input type='submit' className='contact-submit' value='Add' />
                </div>


            </form> 
    
        </div> 
    )
}

export default AddUsers;