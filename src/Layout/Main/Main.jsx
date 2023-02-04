import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import HomeButton from '../../Components/HomeButton/HomeButton';
import Navbar from '../../Components/Navbar/Navbar';

const Main = () => {
    return (
        <div className='max-w-[1500px]'>
            <Navbar />
            <Outlet />
            <Footer />
            <HomeButton />
        </div>
    );
};

export default Main;