import React, { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { RxCross1, RxDoubleArrowRight } from 'react-icons/rx';
import { SiWebmin } from 'react-icons/si';
import useScrollPosition from '../Hooks/useScrollPosition';
import './Navbar.css';
import { Link } from 'react-router-dom';

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
        <header className={`nav-container flex justify-between items-center fixed top-0 py-6 duration-300 z-[1000] w-full max-w-[1500px] ${sticky} ${color} text-gray-300`}>
            <a href="#home" className='duration-75'>
                <span className={`flex items-center gap-2 font-bold ${color} text-white text-4xl animate-pulse`}>
                    <SiWebmin /> Masum
                </span>
            </a>

            <ul className='hidden lg:flex gap-7 font-bold'>
                <li className='nav-link'>
                    <Link
                        to="/"
                        className='text-gray-400 hover:text-white duration-300'
                    >Home</Link>
                </li>

                <li className='nav-link'>
                    <a
                        className='text-gray-400 hover:text-white duration-300'
                        href="#service"
                    >Service</a>
                </li>

                <li className='nav-link'>
                    <a className='text-gray-400 hover:text-white duration-300' href="#contact">Contact</a>
                </li>

                <li className='nav-link'>
                    <div className="dropdown dropdown-hover">

                        <label
                            tabIndex={0}
                            className="text-gray-400 hover:text-white duration-300 cursor-pointer"
                        >Pages</label>

                        <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow rounded-box w-52 bg-[#2A2C39] text-gray-300"
                        >
                            <li
                                className='text-gray-300 hover:text-white hover:bg-[#252734]'
                            ><a href='#about'>About Me</a>
                            </li>

                            <li
                                className='text-gray-300 hover:text-white hover:bg-[#252734]'
                            ><a href='#experience'>Experience</a>
                            </li>

                            <li
                                className='text-gray-300 hover:text-white hover:bg-[#252734]'
                            ><a href='#skills'>Coding Skills</a>
                            </li>

                            <li
                                className='text-gray-300 hover:text-white hover:bg-[#252734]'
                            ><Link to="/blogs">Blog</Link>
                            </li>

                            <li
                                className='text-gray-300 hover:text-white hover:bg-[#252734]'
                            ><Link to='/notfound'>404 Page</Link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className='nav-link'>
                    <a
                        className='text-gray-400 hover:text-white duration-300'
                        href='#projects'>Projects</a>
                </li>
            </ul>

            <div className='hidden lg:flex justify-center items-center'>

                <a
                    href='#contact'
                    className={`flex items-center justify-center gap-2 h-[50px] w-[150px] text-white text-sm font-semibold border border-[#323548] rounded-full hover:bg-[#323548] duration-300`}
                >Hire Me <RxDoubleArrowRight /></a>

                <div className='w-[30px] mr-2 border-t border-[#323548]' />
            </div>

            <nav
                className='flex justify-end lg:hidden fixed top-0 right-0 h-full w-full bg-[#00000086] duration-[0.5s] translate-x-full w z-[4000]'
                ref={navRef}>

                <ul className='relative w-[60%] bg-[var(--primary)] pt-20 font-bold'
                >
                    <li className='hover:bg-[#191c26] text-gray-400 hover:text-white cursor-pointer px-6 py-2'>
                        <Link
                            className='duration-300'
                            to="/">Home</Link>
                    </li>

                    <li className='hover:bg-[#191c26] text-gray-400 hover:text-white cursor-pointer px-6 py-2'>
                        <a className='duration-300' href="#service">Service</a>
                    </li>

                    <li className='hover:bg-[#191c26] text-gray-400 hover:text-white cursor-pointer px-6 py-2'>
                        <a href='#contact' className='duration-300' to="/blogs">Contact</a>
                    </li>

                    <li className='cursor-pointer font-bold px-2 text-gray-400 hover:text-white'>

                        <div
                            tabIndex={0}
                            className="collapse"
                        >
                            <input type="checkbox" />

                            <div className="collapse-title">
                                Pages
                            </div>

                            <ul className="collapse-content ml-2 flex flex-col">
                                <a
                                    className='w-full hover:bg-[#191c26] text-gray-400 hover:text-white cursor-pointer  px-6 py-2'
                                    href='#about'>About Me</a>

                                <a
                                    className='w-full hover:bg-[#191c26] text-gray-400 hover:text-white cursor-pointer px-6 py-2'
                                    href='#experience'>Experience</a>

                                <a
                                    className='w-full hover:bg-[#191c26] text-gray-400 hover:text-white cursor-pointer px-6 py-2'
                                    href='#skills'>Skills</a>

                                <Link
                                    className='w-full hover:bg-[#191c26] text-gray-400 hover:text-white cursor-pointer px-6 py-2'
                                    to='/blogs'>Blog</Link>

                                <Link
                                    className='w-full hover:bg-[#191c26] text-gray-400 hover:text-white cursor-pointer px-6 py-2'
                                    to='/notfound'>404 Page</Link>

                            </ul>
                        </div>
                    </li>

                    <li className='hover:bg-[#191c26] text-gray-400 hover:text-white cursor-pointer px-6 py-2'>
                        <a className='duration-300' href="#projects">Projects</a>
                    </li>

                    <button
                        className="absolute top-2 left-2 mt-3 ml-3 p-2 rounded-full border  text-white"
                        onClick={showNavbar}>
                        <RxCross1 />
                    </button>
                </ul>
            </nav>

            <button className="text-2xl mr-5 text-white flex lg:hidden" onClick={showNavbar}>
                <FaBars />
            </button>

        </header>
    );
};

export default Navbar;