import React, { useEffect } from 'react'

const Sidebar = () => {

    const navigate = (show) => {
        const pages = document.querySelectorAll(".dashboard-page")
        const lists = document.querySelectorAll(".dashboard-sidebar-div")

        pages.forEach(el => {
            el.classList.add("dashboard-hidden")
        });
        pages[show].classList.remove("dashboard-hidden")


        lists.forEach(el => {
            el.classList.remove("dashboard-sidebar-div-hovered")
        });
        lists[show].classList.add("dashboard-sidebar-div-hovered")
        
        localStorage.setItem("page",show)
    }

    const onLoadPage = () => {
        let page = localStorage.getItem("page")
        page = parseInt(page)
        if ( !isNaN(page) ){
            document.querySelectorAll(".dashboard-page").forEach( e => {
                e.classList.add("dashboard-hidden")
            })
            document.querySelectorAll(".dashboard-page")[page].classList.remove("dashboard-hidden")

            document.querySelectorAll(".dashboard-sidebar-div").forEach(el => {
                el.classList.remove("dashboard-sidebar-div-hovered")
            });
            document.querySelectorAll(".dashboard-sidebar-div")[page].classList.add("dashboard-sidebar-div-hovered")
        }
        else {
            document.querySelectorAll(".dashboard-page")[0].classList.remove("dashboard-hidden")
            document.querySelectorAll(".dashboard-sidebar-div")[0].classList.add("dashboard-sidebar-div-hovered")
        }

    }

    useEffect(() => {
        onLoadPage()
    }, [])
    
    return (
        <div className='dashboard-sidebar'>
            <ul className='dashboard-sidebar-ul'>
                <div className='dashboard-sidebar-div' onClick={() => {navigate(0)}}>
                    Home
                </div>
                <div className='dashboard-sidebar-div' onClick={() => {navigate(1)}}>
                    Users
                </div>
                <div className='dashboard-sidebar-div' onClick={() => {navigate(2)}}>
                    Contact
                </div>
                <div className='dashboard-sidebar-div' onClick={() => {navigate(3)}}>
                    Lawyers
                </div>
            </ul>
        </div>
    )
}

export default Sidebar