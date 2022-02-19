import React from 'react'
import {Link} from 'react-router-dom';
import {ReactComponent as Facebook} from '../Svg/facebook.svg';
import {ReactComponent as Instagram} from '../Svg/instagram.svg';
import {ReactComponent as Twitter} from '../Svg/twitter.svg';

const Footer = () => {
    const year = new Date().getFullYear();
    const copyright = 'Copyright © '+ year + ' All rights reserved | ResAvocat'
    return (
        <footer className='footer'>
            <h1 className='footer-header'>ResAvocat</h1>

            <ul className='footer-ul'>

                <li className='footer-li'>
                    <Link to='/' className='footer-a'>Home</Link>
                </li>

                <li className='footer-li'>
                    <Link to='/lawyers' className='footer-a'>Lawyers</Link>
                </li>

                <li className='footer-li'>
                    <Link to='/about' className='footer-a'>About</Link>
                </li>

                <li className='footer-li'>
                    <Link to='/contact' className='footer-a'>Contact</Link>
                </li>

            </ul>


            <ul className='footer-icons'>

                <li className='footer-li-icons'>
                    <a href='https://www.facebook.com/' className='footer-a-icons'>
                        <Facebook />
                    </a>
                </li>

                <li className='footer-li-icons'>
                    <a href='https://www.instagram.com/' className='footer-a-icons'>
                        <Instagram />
                    </a>
                </li>

                <li className='footer-li-icons'>
                    <a href='https://twitter.com/' className='footer-a-icons'>
                        <Twitter />
                    </a>
                </li>
            </ul>

            <p className='footer-copyright'>{copyright}</p>
        </footer>
    )
}

export default Footer
