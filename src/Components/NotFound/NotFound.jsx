import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import notfound from '../../Assets/Images/404-error.webp';
import { RxDoubleArrowLeft } from 'react-icons/rx';

const NotFound = () => {
    return (
        <div
            className='notfound-container bg-[var(--primary)]'
        >
            <div className='flex flex-col justify-center items-center'>
                <h1 className='notfound-intro text-white'>Page Not Found</h1>
                <div className='h-[50px] w-[160px] px-5 mt-6 mb-10 border border-[#323548] rounded-full bg-[var(--primary)] text-white flex justify-between items-center'>
                    <Link
                        to='/'
                        className='flex items-center justify-center gap-2 text-gray-500 hover:text-white duration-300'>Home</Link> <span className='text-gray-500'>||</span> <span>404</span>
                </div>
            </div>

            <div className='notfound mb-16 mx-auto text-white bg-[var(--secondary)]'>

                <div className='order-2 md:order-1'>
                    <h1 className='text-4xl mb-2'>Sorry!</h1>
                    <h3 className='text-2xl mb-6'>This Page is Not Found.</h3>
                    <p className='text-gray-400 mb-6'>I think you lost in space, Or an unknown page. But Don't worry! you can go back to home page. Just click back to home. Thank you!</p>
                    <Link
                        to='/'
                        className='flex items-center justify-center gap-2 h-[50px] w-[160px] text-white text-xs border border-[#323548] rounded-full bg-transparent hover:bg-[var(--primary)] duration-300'><RxDoubleArrowLeft
                        /> Back To Home</Link>
                </div>

                <img className='order-1 md:order-2' src={notfound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;