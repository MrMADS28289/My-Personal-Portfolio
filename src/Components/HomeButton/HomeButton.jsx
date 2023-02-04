import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import useScrollPosition from '../Hooks/useScrollPosition';

const HomeButton = () => {

    const { scrollY } = useScrollPosition();
    // console.log(scrollY);

    return (
        <a
            className={`${scrollY < 300 ? 'hidden' : ''} flex justify-center items-center h-[40px] w-[40px] bg-[#282a3b] shadow-2xl shadow-[#3d38da] rounded-[100%] border border-gray-600 fixed right-5 bottom-10 text-white hover:bg-white hover:text-black duration-[.5s] z-[3000]`}
            href="#home"
        ><IoIosArrowUp /></a>
    );
};

export default HomeButton;