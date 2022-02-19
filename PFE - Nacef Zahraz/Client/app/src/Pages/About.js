import React from 'react';
import aboutus from '../Img/aboutus.png'

const About = () => {

    return (
        <div className='About'>
            <h1 className='about-header'>ResAvocat | About us</h1>
            <div className='about-content'>
                <img src={aboutus} className='about-img'/>
                <span className='about-span'>ResAvocat is an online company that allows you to hire lawyers from your home and be able to email and ask for information at any time. </span>
            </div>
        </div>
    )
}

export default About;
