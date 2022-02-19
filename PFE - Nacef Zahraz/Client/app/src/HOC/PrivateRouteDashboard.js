import React from 'react'
import jwt_decode from 'jwt-decode'
import {Route,Redirect} from 'react-router-dom'
  
export const PrivetRouteDashboard = ({component:Component,...rest}) => {
    return (
        <Route {...rest} component={(props)=>{
            const token = localStorage.getItem('token')

            if (token){
                if (jwt_decode(token).role === 'admin') return <Component {...props} />

            } else return  <Redirect to={`/admin`} />

        }} /> 
    )
}
