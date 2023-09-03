import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ContextAPI } from '../../App'

const PrivateRoute = ({ children, ...rest }) => {
    const [googleData, setGoogleData] = useContext(ContextAPI)

    return (
        <div>
            <Route {...rest} render={({ location }) => (
                googleData.email ? (children) : (<Redirect to={{ pathname: '/Login', state: { from: location } }} />)
            )}
            />
        </div>
    )
}

export default PrivateRoute
