import React, { useEffect, useState } from 'react';
import { MdDoubleArrow } from 'react-icons/md';
import { SiWebmin } from 'react-icons/si';
import useScrollPosition from '../Hooks/useScrollPosition';

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
        <div className={`flex justify-between items-center fixed top-0 left-0 px-16 py-6 duration-300 z-[1000] w-full ${sticky} ${color} text-gray-300`}>
            <a href="#home" className='relative duration-75'>
                <span className={`flex items-center gap-2 font-bold ${color} text-white text-4xl animate-pulse`}>
                    <SiWebmin /> Masum
                </span>
            </a>

            <ul className='flex relative gap-7 font-bold'>
                <li><a href="#home">Home</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#pages">Pages</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <button className={`flex items-center justify-center gap-2 h-[50px] w-[150px] text-white font-semibold border border-gray-500 rounded-full hover:bg-[#252734] duration-300 ${color}`}>Hire Me <MdDoubleArrow /></button>
        </div>
    );
};

export default Navbar;