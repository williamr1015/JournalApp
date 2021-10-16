import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({
    isAutenticated,
    component: Component,
    ...rest
}) => {

    console.log(rest.location.pathname);
    return (
        <Route { ...rest }
        component={ ( props ) => (
            (isAutenticated)
                ? ( <Component { ...props } /> )
                : ( <Redirect to="/auth/login" /> )
        )}
        />
    )
}

PrivateRoute.propTypes = {

isAutenticated: PropTypes.bool.isRequired,
component: PropTypes.func.isRequired
}
