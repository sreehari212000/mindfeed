import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user} = useContext(AppContext)
    if(!user){
        return <Navigate to={'/signin'} replace/>
    }
  return (
    children
  )
}

export default PrivateRoute