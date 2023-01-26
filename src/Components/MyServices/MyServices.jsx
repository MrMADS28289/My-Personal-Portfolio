import React from 'react';
import './MyServices.css';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import { BiCode, BiCodeAlt, BiCodeCurly } from 'react-icons/bi';
import { RxDoubleArrowRight } from 'react-icons/rx';

const MyServices = () => {

    return (
        <section
            id='service'
            className='bg-[#2A2C39] pb-[100px]'>

            <div className='section-intro text-white'>
                <h3 className='text-gray-400'>|| My Services</h3>
                <h1 className='text-4xl mt-6'>Service Provide For My Clients.</h1>
            </div>

            <div className='flex justify-center'>

                <div className='slide-container'>

                    <Swiper
                        effect={"coverflow"}
                        grabCursor={false}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        loop={true}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='service text-white bg-[#252734]'
                            >
                                <BiCodeAlt className='service-icon' />
                                <h2 className='service-name'>Full-Stack Development.</h2>

                                <p className='text-sm text-gray-400'>The web development process includes: web content, client-side / server-side scripting and network security configuration.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='service text-white bg-[#252734]'
                            >
                                <BiCode className='service-icon' />
                                <h2 className='service-name'>Front-end Development.</h2>

                                <ul className='text-gray-400'>
                                    <li className='flex items-center gap-2 mb-3'><RxDoubleArrowRight /> HTML/CSS</li>
                                    <li className='flex items-center gap-2 mb-3'><RxDoubleArrowRight /> Animation</li>
                                    <li className='flex items-center gap-2 mb-3'><RxDoubleArrowRight /> JavaScript</li>
                                    <li className='flex items-center gap-2 mb-3'><RxDoubleArrowRight /> React.js</li>
                                </ul>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='service text-white bg-[#252734]'
                            >
                                <BiCodeCurly className='service-icon' />
                                <h2 className='service-name'>Back-end Development.</h2>

                                <ul className='text-gray-400'>
                                    <li className='flex items-center gap-2 mb-3'><RxDoubleArrowRight /> MongoDB</li>
                                    <li className='flex items-center gap-2 mb-3'><RxDoubleArrowRight /> Node.js</li>
                                    <li className='flex items-center gap-2 mb-3'><RxDoubleArrowRight /> Express.js</li>
                                </ul>
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>

            </div>

        </section>
    );
};

export default MyServices;