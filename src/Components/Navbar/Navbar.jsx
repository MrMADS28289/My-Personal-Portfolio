import React, { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { MdDoubleArrow } from 'react-icons/md';
import { SiWebmin } from 'react-icons/si';
import useScrollPosition from '../Hooks/useScrollPosition';
import './Navbar.css';

const Navbar = () => {

    const [sticky, setSticky] = useState('');
    const [color, setColor] = useState('');
    const navRef = useRef();
    const { scrollY } = useScrollPosition();

    useEffect(() => {
        if (!scrollY) {
            setSticky('');
            setColor('');
        }
        if (scrollY) {
            setSticky('bg-[#252734] h-[70px]');
            setColor('text-black');
        }
    }, [scrollY]);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header className={`flex justify-between items-center fixed top-0 left-0 px-16 py-6 duration-300 z-[1000] w-full max-w-[1200px] ${sticky} ${color} text-gray-300`}>
            <a href="#home" className='duration-75'>
                <span className={`flex items-center gap-2 font-bold ${color} text-white text-4xl animate-pulse`}>
                    <SiWebmin /> Masum
                </span>
            </a>

            <ul className='hidden lg:flex gap-7 font-bold'>
                <li className='nav-link'>
                    <a
                        className='text-gray-400 hover:text-white duration-300'
                        href="#home">Home</a>
                </li>
                <li className='nav-link'>
                    <a className='text-gray-400 hover:text-white duration-300' href="#service">Service</a>
                </li>
                <li className='nav-link'>
                    <a className='text-gray-400 hover:text-white duration-300' href="#blog">Blog</a>
                </li>
                <li className='nav-link'>
                    <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="text-gray-400 hover:text-white duration-300 cursor-pointer">Pages</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 bg-[#000000d4] text-gray-300">
                            <li className='text-gray-300 hover:text-white hover:bg-[#252734]'><a href='/'>About Me</a></li>
                            <li className='text-gray-300 hover:text-white hover:bg-[#252734]'><a href='/'>Projects</a></li>
                            <li className='text-gray-300 hover:text-white hover:bg-[#252734]'><a href='/'>Projects Details</a></li>
                            <li className='text-gray-300 hover:text-white hover:bg-[#252734]'><a href='/'>FAQ</a></li>
                            <li className='text-gray-300 hover:text-white hover:bg-[#252734]'><a href='/'>404 Page</a></li>
                        </ul>
                    </div>
                </li>
                <li className='nav-link'>
                    <a className='text-gray-400 hover:text-white duration-300' href="#contact">Contact</a>
                </li>
            </ul>

            <div className='hidden lg:flex justify-center items-center'>
                <button className={`flex items-center justify-center gap-2 h-[50px] w-[150px] text-white font-semibold border border-[#323548] rounded-full hover:bg-[#323548] duration-300`}>Hire Me <MdDoubleArrow /></button>
                <div className='w-[30px] border-t border-[#323548]' />
            </div>

            <nav
                className='flex justify-end lg:hidden fixed top-0 right-0 h-full w-full bg-[#00000086] duration-[0.5s] translate-x-full w z-[3000]'
                ref={navRef}>
                <ul className='relative w-[60%] bg-[var(--primary)] pt-20 font-bold'>
                    <li className='hover:bg-[#191c26] text-gray-400 hover:text-white cursor-pointer px-6 py-2'>
                        <a
                            className='duration-300'
                            href="#home">Home</a>
                    </li>
                    <li className='hover:bg-[#191c26] text-gray-400 hover:text-white cursor-pointer px-6 py-2'>
                        <a className='duration-300' href="#service">Service</a>
                    </li>
                    <li className='hover:bg-[#191c26] text-gray-400 hover:text-white cursor-pointer px-6 py-2'>
                        <a className='duration-300' href="#blog">Blog</a>
                    </li>
                    <li className='cursor-pointer'>
                        <div tabIndex={0} className="collapse collapse-arrow">
                            <div className="collapse-title hover:bg-[#191c26] font-bold px-6 text-gray-400 hover:text-white">
                                Pages
                            </div>
                            <ul className="collapse-content mx-6">
                                <li className='hover:bg-[#191c26] text-gray-400 hover:text-white cursor-pointer px-6 py-2'>
                                    <a href='/'>About Me</a>
                                </li>
                                <li className='hover:bg-[#191c26] text-gray-400 hover:text-white cursor-pointer px-6 py-2'>
                                    <a href='/'>Projects</a>
                                </li>
                                <li className='hover:bg-[#191c26] text-gray-400 hover:text-white cursor-pointer px-6 py-2'>
                                    <a href='/'>Projects Details</a>
                                </li>
                                <li className='hover:bg-[#191c26] text-gray-400 hover:text-white cursor-pointer px-6 py-2'>
                                    <a href='/'>FAQ</a>
                                </li>
                                <li className='hover:bg-[#191c26] text-gray-400 hover:text-white cursor-pointer px-6 py-2'>
                                    <a href='/'>404 Page</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='hover:bg-[#191c26] text-gray-400 hover:text-white cursor-pointer px-6 py-2'>
                        <a className='duration-300' href="#contact">Contact</a>
                    </li>

                    <button
                        className="absolute top-2 left-2 mt-3 ml-3 p-2 rounded-full border  text-white"
                        onClick={showNavbar}>
                        <RxCross1 />
                    </button>
                </ul>
            </nav>

            <button className="text-2xl text-white flex lg:hidden" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
};

export default Navbar;