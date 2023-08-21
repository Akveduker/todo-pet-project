import React from 'react';
import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from 'store/store';
import { routes } from 'utils/constants/routes/routes';
import { userSelector } from 'utils/helpers/selectors/userSelector/userSelector';

const ProtectedRoot = () => {
    const location = useLocation()
    const isLoggedIn = useAppSelector(userSelector).isLogged
    return (
        isLoggedIn ?
            <Outlet />
            :
            <Navigate to={`/${routes.auth}`} state={{ from: location }} />
    );

};

export default ProtectedRoot;