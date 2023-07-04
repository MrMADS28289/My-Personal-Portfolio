import React from 'react';
import Bannner from '../../Components/Banner2/Bannner';
// import { Outlet } from 'react-router-dom';
// import Footer from '../../Components/Footer/Footer';
// import HomeButton from '../../Components/HomeButton/HomeButton';
// import Navbar from '../../Components/Navbar/Navbar';
// import Banner from '../../Components/Banner/Banner';

const Main = () => {
    return (
        <div className='max-w-[1500px]'>
            {/* <Navbar />
            <Outlet />
            <Footer />
            <HomeButton /> */}
            {/* <Banner /> */}
            <Bannner />
        </div>
    );
};

export default Main;