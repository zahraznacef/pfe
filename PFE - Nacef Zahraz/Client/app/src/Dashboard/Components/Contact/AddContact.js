import React, {useState} from 'react'
import { ReactComponent as Close } from '../../../Svg/minus-round-line.svg'
import { addContact } from '../../Request/Request'

const AddContact = () => {



    // Hide Adding Form
    const hideForm = () => {
        document.querySelector(".dashboard-add").classList.remove("flex")
        document.querySelector("body").classList.remove("overflow-hidden")
    }


    // Add Lawyer
    const [input,setInput] = useState({
        fullname:'',
        email:'',
        subject:'',
        message : ''
    })


    return (
        <div className='dashboard-add dashboard-contact-add'>

            <form className='dashboard-update-form' onSubmit={() => addContact(input)}>
                <div className='form-exit' onClick={hideForm}>
                    <Close className="close-form"/>
                </div>
                
                <div className='contact-input-div'>
                    <input required type='text' className='contact-input' placeholder=' ' onChange={(e) =>  setInput({...input,fullname:e.target.value})}/>
                    <div className='contact-placeholder'>Fullname</div>
                </div>

                <div className='contact-input-div'>
                    <input required type='text' className='contact-input' placeholder=' ' onChange={(e) =>  setInput({...input,email:e.target.value})}/>
                    <div className='contact-placeholder'>Email</div>
                </div>

                <div className='contact-input-div'>
                    <input required type='text' className='contact-input' placeholder=' ' onChange={(e) =>  setInput({...input,subject:e.target.value})}/>
                    <div className='contact-placeholder'>Subject</div>
                </div>

                <div className='contact-input-div'>
                    <input required type='text' className='contact-input' placeholder=' ' onChange={(e) =>  setInput({...input,message:e.target.value})}/>
                    <div className='contact-placeholder'>Message</div>
                </div>

                <div className='contact-submit-div'>
                    <input type='submit' className='contact-submit' value='Add' />
                </div>


            </form> 
    
        </div> 
    )
}

export default AddContact;