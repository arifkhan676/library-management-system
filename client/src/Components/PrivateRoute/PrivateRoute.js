import React, { useContext } from 'react'
import { Route, Redirect, Navigate, useLocation, Outlet } from 'react-router-dom'
import { ContextAPI } from '../../App'
import Proceed from '../ProceedBorrow/Proceed'
import StudentEntry from '../StudentEntry/StudentEntry'

const PrivateRoute = () => {
    const [googleData, setGoogleData] = useContext(ContextAPI)
    const location = useLocation();

    return googleData.email ? <Outlet /> : <Navigate to='/Login' replace state={{ from: location }} />;
}

export default PrivateRoute
