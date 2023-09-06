import React, { useContext } from 'react'
import { Route, Redirect, Navigate, useLocation } from 'react-router-dom'
import { ContextAPI } from '../../App'
import Proceed from '../ProceedBorrow/Proceed'

const PrivateRoute = () => {
    const [googleData, setGoogleData] = useContext(ContextAPI)
    const location = useLocation();

    return googleData.email ? <Proceed /> : <Navigate to='/Login' replace state={{ from: location }} />;
}

export default PrivateRoute
