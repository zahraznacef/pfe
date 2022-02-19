import React, {useState , useEffect} from 'react'
import { getAllLawyers } from '../../Request/Request';
import UpdateLawyers from './UpdateLawyers';

const Lawyers = () => {

    // Get all Lawyers
    const [lawyers,setLawyers] = useState([]);

    useEffect( () => {
        getAllLawyers(setLawyers)
    }, [])
    

    return (
        <div className='dashboard-lawyers'>
            {lawyers.map( el => (
                <div className='dashboard-lawyers-card'>
                    <img src={el.image} className='dashboard-lawyers-card-img' alt="lawyer"/>
                    <div className='dashboard-lawyers-card-content'>
                        <h2>{el.fullname}</h2>
                        <p>{el.description}</p>
                    </div>
                    <UpdateLawyers props={el} _id={el._id}/>
                </div>
            ))}
        </div>
    )
}

export default Lawyers;
