import React, { useEffect } from 'react';
import { updateLawyer } from '../../Request/Request';
import { ReactComponent as Close } from '../../../Svg/minus-round-line.svg'
import { useState } from 'react';
import { deleteLawyer } from '../../Request/Request'

const UpdateLawyers = ({props,_id}) => {

    // Update
    const [lawyer,setLawyer] = useState({
        fullname : props.fullname,
        image : props.image,
        description : props.description
    })

    const updateOnClick = () => {
        let i = 0;
        document.querySelectorAll(".dashboard-update-lawyers").forEach( el => {
            document.querySelectorAll(".update-lawyer")[i].onclick = () => {
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

                <button className='update button update-lawyer'>Update</button>
                <button className='delete button' onClick={() => deleteLawyer(_id)} >Delete</button>

            </div>
            <div className='dashboard-update dashboard-update-lawyers'>

                <form className='dashboard-update-form' onSubmit={() => updateLawyer(_id,lawyer)}>

                    <div className='form-exit' onClick={() => hideForm()}>
                        <Close className="close-form"/>
                    </div>

                    <div className='contact-input-div'>
                        <input required type='text' className='contact-input' placeholder=' ' onChange={(e) => setLawyer({...lawyer,fullname:e.target.value})} defaultValue={lawyer.fullname} />
                        <div className='contact-placeholder'>Fullname</div>
                    </div>

                    <div className='contact-input-div'>
                        <input required type='text' className='contact-input' placeholder=' ' onChange={(e) => setLawyer({...lawyer,image:e.target.value})} defaultValue={lawyer.image} />
                        <div className='contact-placeholder'>Image</div>
                    </div>

                    <div className='contact-input-div'>
                        <input required type='text' className='contact-input' placeholder=' ' onChange={(e) => setLawyer({...lawyer,description:e.target.value})} defaultValue={lawyer.description} />
                        <div className='contact-placeholder'>Description</div>
                    </div>

                    <div className='contact-submit-div'>
                        <input type='submit' className='contact-submit' value='Update' />
                    </div>


                </form> 

            </div> 
        </>
    )
};

export default UpdateLawyers;
