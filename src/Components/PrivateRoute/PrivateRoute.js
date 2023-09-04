import React, { useContext } from 'react'
import { Route, Redirect, Navigate } from 'react-router-dom'
import { ContextAPI } from '../../App'

const PrivateRoute = ({ children, ...rest }) => {
    const [googleData, setGoogleData] = useContext(ContextAPI)

    return (
        <Route {...rest} render={({ location }) => (
            googleData.email ? (children) : (<Navigate to='/Login' />)
        )}
        />
    )
}

export default PrivateRoute
