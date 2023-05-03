import React, { useContext } from 'react';
import { AuthContext } from './providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();

    console.log('hi im in private route', user)
    if(user){
        return children;
    }
    return  <Navigate state={{from: location }} to='/login' replace></Navigate>
};

export default PrivateRoutes;