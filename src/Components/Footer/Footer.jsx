import React from 'react';
import './Footer.css';
import { BsFillTelephoneFill, BsHeartFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { BiCopyright } from 'react-icons/bi';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiWebmin } from 'react-icons/si';

const Footer = () => {

    const date = new Date();

    return (
        <section
            className='relative overflow-hidden bg-[var(--primary)] text-white'
        >
            <div className='footer-section'>
                <div className='h-[600px] w-[600px] z-[1] border border-gray-700 rounded-full absolute top-[-400px] left-[-400px]' />
                <div className='h-[600px] w-[600px] z-[1] border border-gray-600 rounded-full absolute top-[-380px] left-[-380px]' />
                <div className='h-[600px] w-[600px] z-[1] border border-gray-700 rounded-full absolute top-[-360px] left-[-360px]' />
                <div className='h-[600px] w-[600px] z-[1] border border-gray-700 rounded-full absolute top-[-400px] right-[-400px]' />
                <div className='h-[600px] w-[600px] z-[1] border border-gray-600 rounded-full absolute top-[-380px] right-[-380px]' />
                <div className='h-[600px] w-[600px] z-[1] border border-gray-700 rounded-full absolute top-[-360px] right-[-360px]' />


                <div className='footer-intro text-white text-center'>
                    <h3 className='text-gray-400'>|| Get Latest Updates</h3>
                    <h1 className='footer-section-intro'>Subscribe For Newsletter</h1>

                    <form className='flex justify-center py-10 gap-6' action="" >
                        <input
                            className='news-letter-input py-3 px-6 border border-[#323548] rounded-full bg-transparent z-20'
                            type="email"
                            name="news-letter-email"
                            id="news-letter-email"
                            placeholder='demo@example.com'
                        />
                        <input
                            className='news-letter-btn flex items-center justify-center gap-2 text-white border border-[#323548] rounded-full hover:bg-[#323548] duration-300 cursor-pointer z-20'
                            type="button"
                            value="Subscribe Now"
                        />
                    </form>
                </div>

                <div className='footer-contact'>

                    <a href='tel:+8801734326573' className='flex items-center gap-4'>
                        <span className='phone-icon border rounded-full hover:bg-white hover:text-black duration-300'>                        <BsFillTelephoneFill /> </span>+88 01734326573
                    </a>

                    <a href='mailto:abduss.sobhan28@gmail.com' className='email-anc flex items-center gap-4'>
                        <span className='email-icon border rounded-full hover:bg-white hover:text-black duration-300'><MdEmail /> </span> abduss.sobhan28@gmail.com
                    </a>

                    <div className='flex items-center gap-4'>
                        <a
                            className='border border-gray-200 rounded-full p-2 bg-[#2A2C39] hover:bg-white hover:text-black duration-300'
                            href="https://github.com/MrMADS28289" target="blank">
                            <AiOutlineGithub />
                        </a>
                        <a
                            className='border border-gray-200 rounded-full p-2 bg-[#2A2C39] hover:bg-white hover:text-black duration-300'
                            href="https://www.linkedin.com/in/abduss-sobhan/" target="blank">
                            <FaLinkedinIn />
                        </a>
                        <a
                            className='border border-gray-200 rounded-full p-2 bg-[#2A2C39] hover:bg-white hover:text-black duration-300'
                            href="https://www.facebook.com/Mr.Mads2" target='blank'>
                            <FaFacebookF />
                        </a>
                        <a
                            className='border border-gray-200 rounded-full p-2 bg-[#2A2C39] hover:bg-white hover:text-black duration-300'
                            href="https://www.facebook.com/Mr.Mads2" target='blank'>
                            <FaTwitter />
                        </a>
                    </div>

                </div>
            </div>

            <div className='developer-credit flex justify-between border-t border-gray-600 py-6 text-sm'>
                <p className='flex items-center gap-1 text-gray-400 order-2'><BiCopyright /> {date.getFullYear()} <span className='flex items-center gap-1' ><span className='text-white'>Masum</span> Made with <BsHeartFill className='text-white' /> by <span className='text-white'>Masum Abduss Sobhan</span>.</span></p>
                <a href="#home" className='duration-75'>
                    <span className='flex items-center gap-2 font-bold  text-white text-4xl animate-pulse order-1'>
                        <SiWebmin /> Masum
                    </span>
                </a>
            </div>
        </section>
    );
};

export default Footer;