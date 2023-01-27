import React from 'react';
import './Experience.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";


const Experience = () => {
    return (
        <section
            id='experience'
            className='experience-section bg-[var(--primary)] text-white'
        >
            <div className='experience-intro text-white'>
                <h3 className='text-gray-400'>|| Working With</h3>
                <h1 className='text-4xl my-6'>Experience.</h1>
            </div>

            <div className='experience-slide-container flex justify-center mt-16'>
                <Swiper
                    effect={"cube"}
                    grabCursor={true}
                    loop={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination]}
                    className="experience-swiper"
                >
                    <SwiperSlide className='experience-slide'>
                        <div className='experience-intro flex mb-6'>
                            <p className='experience-date text-[10px] rotate-90'>Jul - Nov</p>
                            <h1 className='company ml-2'>ATG (Across The Globe)</h1>
                        </div>
                        <p className='text-gray-400'>My experience as a MERN stack developer at ATG (Across The Globe) was truly invaluable. During my internship from July to November 2022, I had the opportunity to work on a variety of projects and gain hands-on experience with technologies such as MongoDB, Express.js, React, and Node.js.</p>
                    </SwiperSlide>
                    <SwiperSlide className='experience-slide'>
                        <p className='text-gray-400'>One of my main responsibilities was to assist in the development of a web-based application that aimed to streamline the process of scheduling appointments for patients. I was in charge of implementing the backend using Node.js and Express.js and integrating it with the front-end, which was built using React. This project not only helped me to improve my skills in the MERN stack but also gave me a deeper understanding of how to develop a full-stack application.</p>
                    </SwiperSlide>
                    <SwiperSlide className='experience-slide'>
                        <p className='text-gray-400'>Another project I worked on was a CRUD application for managing inventory. I was responsible for developing the front-end using React and integrating it with the MongoDB database. This project gave me a better understanding of how to work with NoSQL databases and how to build a responsive user interface.</p>
                    </SwiperSlide>
                    <SwiperSlide className='experience-slide'>
                        <p className='text-gray-400'>In addition to working on these projects, I had the opportunity to work with a great team of developers who were very supportive and always willing to help. They provided me with guidance and mentorship, which helped me to grow both technically and personally.</p>
                    </SwiperSlide>
                    <SwiperSlide className='experience-slide'>
                        <p className='text-gray-400'>Overall, my internship at ATG was an incredibly rewarding experience. I am grateful for the opportunity to work on real-world projects and gain hands-on experience with the MERN stack. I am confident that the skills and knowledge I have gained will be beneficial in my future career as a MERN stack developer.</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Experience;