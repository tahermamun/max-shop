import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext'
import { Redirect, Route } from 'react-router-dom';


export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();


    return  currentUser ? (
        <Route {...rest}>{(props) => <Component {...props} />}</Route>
      ) : (
        <Redirect to="/signIn" />
      );
}