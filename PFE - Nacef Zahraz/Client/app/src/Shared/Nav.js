import React from 'react'
import {Link} from 'react-router-dom'
import jwt_decode from 'jwt-decode'

const Nav = () => {

    const logout = () =>{
        window.localStorage.clear()
        window.location.reload()
    }


    const token = window.localStorage.getItem("token");

    let connect;

    if (token){
        if (jwt_decode(token).role === 'user'){
            connect = (<ul className='connect'>

                <li className='connect-li'>
                    <Link to='/profile' className='connect-a'>
                        My Profile
                    </Link>
                </li>
        
                <li className='connect-li'>
                    <button className='connect-a' onClick={logout}>
                        Sign out
                    </button>
                </li>
    
            </ul>)
        }
        else {
            connect = (<ul className='connect'>

                <li className='connect-li'>
                    <Link to='/dashboard' className='connect-a'>
                        Dashboard
                    </Link>
                </li>
        
                <li className='connect-li'>
                    <Link to='/profile' className='connect-a'>
                        My Profile
                    </Link>
                </li>
        
                <li className='connect-li'>
                    <button className='connect-a' onClick={logout}>
                        Sign out
                    </button>
                </li>
    
            </ul>)
        }
    }


    else {
        connect = (<ul className='connect'>
        <li className='connect-li'>
            <Link to='/login' className='connect-a'>
                Login
            </Link>
        </li>

        <li className='connect-li'>
            <Link to='/signin' className='connect-a'>
                Sign in
            </Link>
        </li>

    </ul>)
    }

    return (
        <nav className='nav'>
            <ul className='nav-ul'>

                <li className='nav-li'>
                    <Link to='/' className='nav-a'>Home</Link>
                </li>

                <li className='nav-li'>
                    <Link to='/lawyers' className='nav-a'>Lawyers</Link>
                </li>

                <li className='nav-li'>
                    <Link to='/about' className='nav-a'>About</Link>
                </li>

                <li className='nav-li'>
                    <Link to='/contact' className='nav-a'>Contact</Link>
                </li>
            </ul>

        {connect}

        </nav>
    );
}

export default Nav
