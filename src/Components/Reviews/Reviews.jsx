import React from 'react';
import './Reviews.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectFlip, Pagination, Navigation } from "swiper";
import client from '../../Assets/Images/clients/client.jpg';
import client1 from '../../Assets/Images/clients/client1.jpg';
import client2 from '../../Assets/Images/clients/client2.jpg';
import client3 from '../../Assets/Images/clients/client3.jpg';

const Reviews = () => {
    return (
        <section
            className='reviews-section bg-[#2A2C39] text-white pb-10'
        >
            <div className='reviews-intro text-white'>
                <h3 className='text-gray-400'>|| What Customers Say</h3>
                <h1 className='reviews-section-intro my-6'>Reviews.</h1>
            </div>

            <div className='reviews-slide-container flex justify-center py-6'>
                <Swiper
                    effect={"flip"}
                    grabCursor={true}
                    pagination={true}
                    navigation={true}
                    modules={[EffectFlip, Pagination, Navigation]}
                    className="reviews-swiper"
                >
                    <SwiperSlide className='reviews-slide'>
                        <div>
                            <div className='flex items-center gap-4'>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={client} alt='' />
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-2xl'>Joseph Macky</h1>
                                    <h3 className='text-gray-400 uppercase'>Architect</h3>
                                </div>
                            </div>

                            <div className='flex mt-6'>
                                <span className='text-4xl text-gray-500 mr-6'>“</span>
                                <p className='text-gray-300 text-sm mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illum libero exercitationem ea qui explicabo? Sapiente error reprehenderit non alias aliquam, cumque fugit magni soluta autem rem eaque corrupti sint.</p>
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center gap-4'>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={client1} alt='' />
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-2xl'>Laura Owens</h1>
                                    <h3 className='text-gray-400 uppercase'>Designer</h3>
                                </div>
                            </div>

                            <div className='flex mt-6'>
                                <span className='text-4xl text-gray-500 mr-6'>“</span>
                                <p className='text-gray-300 text-sm mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illum libero exercitationem ea qui explicabo? Sapiente error reprehenderit non alias aliquam, cumque fugit magni soluta autem rem eaque corrupti sint.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='reviews-slide'>
                        <div>
                            <div className='flex items-center gap-4'>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={client2} alt='' />
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-2xl'>Joseph Macky</h1>
                                    <h3 className='text-gray-400 uppercase'>Architect</h3>
                                </div>
                            </div>

                            <div className='flex mt-6'>
                                <span className='text-4xl text-gray-500 mr-6'>“</span>
                                <p className='text-gray-300 text-sm mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illum libero exercitationem ea qui explicabo? Sapiente error reprehenderit non alias aliquam, cumque fugit magni soluta autem rem eaque corrupti sint.</p>
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center gap-4'>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={client3} alt='' />
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-2xl'>Laura Owens</h1>
                                    <h3 className='text-gray-400 uppercase'>Designer</h3>
                                </div>
                            </div>

                            <div className='flex mt-6'>
                                <span className='text-4xl text-gray-500 mr-6'>“</span>
                                <p className='text-gray-300 text-sm mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illum libero exercitationem ea qui explicabo? Sapiente error reprehenderit non alias aliquam, cumque fugit magni soluta autem rem eaque corrupti sint.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    );
};

export default Reviews;