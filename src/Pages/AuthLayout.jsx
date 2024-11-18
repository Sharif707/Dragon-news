import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const AuthLayout = () => {
    return (
        <div className='font-poppins bg-[#f3f3f3]'>
            <header>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;