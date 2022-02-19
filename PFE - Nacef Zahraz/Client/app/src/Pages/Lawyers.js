import axios from 'axios';
import React, { useEffect, useState } from 'react';

import {ReactComponent as DoubleArrowTop} from '../Svg/double-arrow-top.svg';

const Lawyers = () => {

    const [lawyer, setLawyer] = useState([])

    const lawyersCards = () => {
        axios.get("http://localhost:8000/app/lawyers/get").then( res => {
            setLawyer(res.data)
        })
    }

    useEffect( () => {
        lawyersCards();
    }, [])

    return (
        <div className='lawyers'>
            <h1 className='lawyers-header'>ResAvocat | Our Lawyers</h1>
            <div className='lawyers-list'>
                {lawyer.map( el => (
                    <div className='lawyers-card'>
                        <img alt='lawyer' src={el.image} className='lawyers-img'/>
                        <div className='lawyers-info'>
                            <div className='lawyers-name'>
                                <h1>{el.fullname}</h1>
                                <DoubleArrowTop className='arrow-top'/>
                            </div>
                            <p className='lawyers-description'>{el.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Lawyers;