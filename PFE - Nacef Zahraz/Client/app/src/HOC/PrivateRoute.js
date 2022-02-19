import React from 'react'
import {Route,Redirect} from 'react-router-dom'
  
export const PrivetRoute = ({component:Component,...rest}) => {
    return (
        <Route {...rest} component={(props)=>{
            const token = window.localStorage.getItem('token')
            
            if(token){
                return <Component {...props} />
            }else {
            return  <Redirect to={`/login`} />
            }
        }} /> 
    )
}