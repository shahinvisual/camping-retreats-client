import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-screen-xl mx-auto min-h-screen'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;