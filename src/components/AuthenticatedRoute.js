import React, {  useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router';
import Auth from '../context/Auth';

const AuthenticatedRoute = ({ path, component }) =>  {
    const { isAuthenticated } = useContext (Auth);

    return isAuthenticated ? (
        <Route exact path={path} component={component}/>
    ) : (
        <Redirect to ="/adminlogin" /> 
        
    )
}
export default AuthenticatedRoute;
