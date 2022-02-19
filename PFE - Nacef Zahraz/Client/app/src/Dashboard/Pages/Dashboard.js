import React from 'react';
import AddLawyers from '../Components/Lawyers/AddLawyers';
import { ReactComponent as Plus } from '../../Svg/plus.svg'
import Lawyers from '../Components/Lawyers/Lawyers';
import Sidebar from '../Components/Sidebar/Sidebar';
import AddUsers from '../Components/Users/AddUsers';
import Users from '../Components/Users/Users'
import Contacts from '../Components/Contact/Contacts';
import AddContact from '../Components/Contact/AddContact'
import jwt from 'jwt-decode'

const Dashboard = () => {
    
    const addFlex = (e) => {
        document.querySelector(e).classList.toggle("flex")
    }

    const token = jwt(localStorage.getItem("token"))

    return (
        <div className='dashboard'>

            <Sidebar />

            <div className='dashboard-content'>

                <div className='dashboard-page dashboard-home dashboard-hidden'>
                    <h1>Welcome {token.fullname}</h1>
                </div>


                <div className='dashboard-page dashboard-users dashboard-hidden'>
                    <h1>List of Users</h1>

                    <button onClick={() => {addFlex(".dashboard-user-add")}} className="default-button">
                        <Plus className='plus-sign'/>
                    </button>

                    <Users />

                    <AddUsers />
                </div>


                <div className='dashboard-page dashboard-contact dashboard-hidden'>
                    <h1>List of Contacts</h1>

                    <button onClick={() => {addFlex(".dashboard-contact-add")}} className="default-button">
                        <Plus className='plus-sign'/>
                    </button>

                    <Contacts />

                    <AddContact />

                </div>


                <div className='dashboard-page dashboard-hidden'>

                    <h1>List of lawyers</h1>

                    <button onClick={() => {addFlex(".dashboard-lawyer-add")}} className="default-button">
                        <Plus className='plus-sign'/>
                    </button>

                    <Lawyers />
                    
                    <AddLawyers />
                    
                </div>
                    

            </div>
        </div>
    )
}

export default Dashboard;
