import React, { useEffect, useState } from 'react';
import useScrollPosition from '../Hooks/useScrollPosition';

const Navbar = () => {

    const [sticky, setSticky] = useState('');
    const { scrollY } = useScrollPosition();

    useEffect(() => {
        if (!scrollY) {
            setSticky('');
        }
        if (scrollY) {
            setSticky('bg-white');
        }
    }, [scrollY]);


    return (
        <div className={`flex justify-between fixed top-0 left-0 mx-8 transition-[0.6s] z-[1000] ${sticky}`}>
            <a href="#home" className='relative transition-[0.6s]'>
                <span className='flex items-center gap-2 text-lg font-bold'>
                    <span className='text-purple-400'>const </span>
                    <span className='text-red-400'>Me </span>
                    <span className='text-purple-400'>= </span>
                    <span className='text-green-400 text-4xl'>Masum </span>
                    <span className='text-sky-400 text-4xl'>;</span>
                </span>
            </a>

            <ul className='flex relative'>
                <li className='relative'><a className='relative transition-[0.6s]' href="#home">Home</a></li>
                <li className='relative'><a className='relative transition-[0.6s]' href="#service">Service</a></li>
                <li className='relative'><a className='relative transition-[0.6s]' href="#blog">Blog</a></li>
                <li className='relative'><a className='relative transition-[0.6s]' href="#pages">Pages</a></li>
                <li className='relative'><a className='relative transition-[0.6s]' href="#contact">Contact</a></li>
            </ul>
        </div>
    );
};

export default Navbar;