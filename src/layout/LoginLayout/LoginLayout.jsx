import React from 'react';
import NavigationBar from '../../pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import LoginNav from '../../pages/Shared/NavigationBar/LoginNav';

const LoginLayout = () => {
    return (
        <div>
            <LoginNav></LoginNav>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;