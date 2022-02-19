import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className='homepage'>
            <div className='main-homepage'>

                <h1 className='main-homepage-header'>ResAvocat</h1>
                <ul className='main-homepage-ul'>

                    <li className='main-homepage-li'>
                        <Link to='/lawyers' className='main-homepage-a'>
                            Hire
                        </Link>
                    </li>

                    <li className='main-homepage-li'>
                        <Link to='/contact' className='main-homepage-a'>
                            Contact
                        </Link>
                    </li>
                    
                </ul>

            </div>
        </div>
    )
}

export default Home
