import React, {useState} from 'react'
import { ReactComponent as Close } from '../../../Svg/minus-round-line.svg'
import { addLawyer } from '../../Request/Request'

const AddLawyers = () => {



    // Hide Adding Form
    const hideForm = () => {
        document.querySelector(".dashboard-add").classList.remove("flex")
        document.querySelector("body").classList.remove("overflow-hidden")
    }


    // Add Lawyer
    const [input,setInput] = useState({
        fullname:'',
        image:'',
        description:''
    })


    return (
        <div className='dashboard-add dashboard-lawyer-add'>

            <form className='dashboard-update-form' onSubmit={() => addLawyer(input)}>
                <div className='form-exit' onClick={hideForm}>
                    <Close className="close-form"/>
                </div>
                
                <div className='contact-input-div'>
                    <input required type='text' className='contact-input' placeholder=' ' onChange={(e) =>  setInput({...input,fullname:e.target.value})}/>
                    <div className='contact-placeholder'>Fullname</div>
                </div>

                <div className='contact-input-div'>
                    <input required type='text' className='contact-input' placeholder=' ' onChange={(e) =>  setInput({...input,image:e.target.value})}/>
                    <div className='contact-placeholder'>Image</div>
                </div>

                <div className='contact-input-div'>
                    <input required type='text' className='contact-input' placeholder=' ' onChange={(e) =>  setInput({...input,description:e.target.value})}/>
                    <div className='contact-placeholder'>Description</div>
                </div>

                <div className='contact-submit-div'>
                    <input type='submit' className='contact-submit' value='Add' />
                </div>


            </form> 
    
        </div> 
    )
}

export default AddLawyers;