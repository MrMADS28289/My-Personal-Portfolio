import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLETE_ID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
            .then((result) => {
                if (result.status) {
                    toast.success('Eamil sent success.');
                    e.target.reset();
                };

            }, (error) => {
                toast.error('Something went wrong.');
            });

    };

    return (
        <section
            id='contact'
            className='contact-container bg-[var(--primary)]'
        >
            <div className='contact-intro text-white'>
                <h3 className='text-gray-400'>|| Let's Talk</h3>
                <h1 className='contact-section-intro mt-6'>If you have any porject or need help, Contact me.</h1>
            </div>

            <div className="message-container gap-10 mt-14">
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className='contact-form flex flex-col mx-auto'>

                    <div className='relative text-white'>
                        <p className='uppercase p-2 absolute top-[-14px] left-[37px] text-xs bg-[var(--primary)]'>Full Name <span className='text-gray-400 ml-1'>*</span></p>
                        <input
                            className='border outline-none border-gray-600 rounded-full bg-transparent py-4 px-8 text-white w-full'
                            type="text"
                            name='name'
                            placeholder='ej: Masum Abduss Sobhan'
                            required />
                    </div>

                    <div className='relative text-white'>
                        <p className='uppercase p-2 absolute top-[11px] left-[37px] text-xs bg-[var(--primary)]'>Email Address <span className='text-gray-400 ml-1'>*</span></p>
                        <input
                            className='border outline-none border-gray-600 rounded-full mt-6 bg-transparent py-4 px-8 text-white w-full'
                            type="email"
                            name="email"
                            placeholder='example@domain.com'
                            required
                            id="" />
                    </div>

                    <div className='relative text-white'>
                        <p className='uppercase p-2 absolute top-[11px] left-[37px] text-xs bg-[var(--primary)]'>Message<span className='text-gray-400 ml-1'>*</span></p>
                        <textarea
                            className='border outline-none border-gray-600 rounded-3xl mt-6 bg-transparent py-4 px-8 text-white w-full'
                            name="message"
                            rows="7"
                            placeholder='To Write'
                            required />
                    </div>

                    <button
                        type="submit"
                        className='w-[150px] h-[60px] mt-6 flex items-center justify-center gap-2 text-white border border-[#323548] rounded-full hover:bg-[#323548] duration-300 cursor-pointer z-20'
                    >Send Message</button>
                </form>

                <div className='contact-form p-10 border border-gray-600 rounded-3xl mx-auto'>

                    <div className='mb-10'>
                        <h1 className='text-3xl text-white'>Masum Abduss Sobhan</h1>
                        <h3 className='text-gray-400'>Full-Stack Developer</h3>
                    </div>

                    <ul className='flex'>
                        <ul className='info-point mr-10 text-gray-400'>
                            <li className='mb-3'>AGE:</li>
                            <li className='mb-3'>RESIDENCE:</li>
                            <li className='mb-3'>FREELANCE:</li>
                            <li className='mb-3'>ADDRESS:</li>
                            <li className='mb-3'>PHONE:</li>
                            <li className='mb-3'>E-MAIL:</li>
                        </ul>

                        <ul className='text-white'>
                            <li className='mb-3'>19</li>
                            <li className='mb-3'>BD</li>
                            <li className='mb-3'>Available</li>
                            <li className='mb-3'>Jhenaidah</li>
                            <li className='mb-3'>+880 1734326573</li>
                            <li className='mb-3'>abduss.sobhan28@gmail.com</li>
                        </ul>
                    </ul>

                    <h2 className='signature text-white text-center text-3xl mt-5'>Mr. Mads</h2>

                </div>
                <ToastContainer />
            </div>
        </section>
    );
};

export default Contact;