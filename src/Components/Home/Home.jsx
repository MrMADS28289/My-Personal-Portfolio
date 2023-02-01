import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import CodingSkil from '../CodingSkil/CodingSkil';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import MyServices from '../MyServices/MyServices';
import Portfolio from '../Portfolio/Portfolio';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {
    return (
        <>
            <Banner />
            <AboutMe />
            <MyServices />
            <Experience />
            <CodingSkil />
            <Portfolio />
            <Reviews />
            <Contact />
        </>
    );
};

export default Home;