import React, { useEffect, useState } from 'react';
import { MdDoubleArrow } from 'react-icons/md';
import { SiWebmin } from 'react-icons/si';
import useScrollPosition from '../Hooks/useScrollPosition';
import './Navbar.css';

const Navbar = () => {

    const [sticky, setSticky] = useState('');
    const [color, setColor] = useState('');
    const { scrollY } = useScrollPosition();

    useEffect(() => {
        if (!scrollY) {
            setSticky('');
            setColor('');
        }
        if (scrollY) {
            setSticky('bg-gray-200 h-[70px]');
            setColor('text-black');
        }
    }, [scrollY]);

    return (
        <div className={`flex justify-between items-center fixed top-0 left-0 px-16 py-6 duration-300 z-[1000] w-full max-w-[1200px] ${sticky} ${color} text-gray-300`}>
            <a href="#home" className='duration-75'>
                <span className={`flex items-center gap-2 font-bold ${color} text-white text-4xl animate-pulse`}>
                    <SiWebmin /> Masum
                </span>
            </a>
            <ul className='flex gap-7 font-bold'>
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
                    {/* <a className='' href="#pages"></a> */}
                </li>
                <li className='nav-link'>
                    <a className='text-gray-400 hover:text-white duration-300' href="#contact">Contact</a>
                </li>
            </ul>

            <div className='flex justify-center items-center'>
                <button className={`flex items-center justify-center gap-2 h-[50px] w-[150px] text-white font-semibold border border-gray-500 rounded-full hover:bg-[#252734] duration-300 ${color}`}>Hire Me <MdDoubleArrow /></button>
                <div className='w-[30px] border-t border-gray-500' />
            </div>
        </div>
    );
};

export default Navbar;