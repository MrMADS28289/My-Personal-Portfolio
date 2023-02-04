import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import portfolio from '../../Assets/Images/portfolio/portfolio1.png';
import portfolio1 from '../../Assets/Images/portfolio/portfolio2.png';
import portfolio2 from '../../Assets/Images/portfolio/portfolio3.png';
import portfolio3 from '../../Assets/Images/portfolio/portfolio4.jpg';
import portfolio4 from '../../Assets/Images/portfolio/portfolio5.png';
import portfolio5 from '../../Assets/Images/portfolio/portfolio6.jpg';
import project from '../../Assets/Images/project.jpg';

const Portfolio = () => {
    return (
        <section
            id='projects'
            className='portfolio-section bg-[var(--primary)] text-white'
        >
            <div className='portfolio-intro text-white'>
                <h3 className='text-gray-400'>|| Awesome Portfolio</h3>
                <h1 className='portfolio-section-intro my-6'>My Complete Projects</h1>
            </div>

            <div className='portfolio-slide-container flex justify-center py-6'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    grabCursor={true}
                    freeMode={false}
                    loop={true}
                    speed={1000}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="portfolio-swiper"
                >
                    <SwiperSlide className='portfolio-slide'>
                        <div className='background'>
                            <img src={project} alt="" />
                        </div>
                        <div className='project-img relative'>
                            <img src={portfolio} alt="" />
                            <div className='portfolio-dec absolute'>
                                <h1 className='text-3xl'>Auto Showroom</h1>
                                <ul className='text-gray-400'>
                                    <a href="/bla">Live Link</a> / <a href="/bla">Sourc Code</a>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='portfolio-slide'>
                        <div className='background'>
                            <img src={project} alt="" />
                        </div>
                        <div className='project-img relative'>
                            <img src={portfolio1} alt="" />
                            <div className='portfolio-dec absolute'>
                                <h1 className='text-3xl'>Auto Showroom</h1>
                                <ul className='text-gray-400'>
                                    <a href="/bla">Live Link</a> / <a href="/bla">Sourc Code</a>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='portfolio-slide'>
                        <div className='background'>
                            <img src={project} alt="" />
                        </div>
                        <div className='project-img relative'>
                            <img src={portfolio2} alt="" />
                            <div className='portfolio-dec absolute'>
                                <h1 className='text-3xl'>Auto Showroom</h1>
                                <ul className='text-gray-400'>
                                    <a href="/bla">Live Link</a> / <a href="/bla">Sourc Code</a>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='portfolio-slide'>
                        <div className='background'>
                            <img src={project} alt="" />
                        </div>
                        <div className='project-img relative'>
                            <img src={portfolio3} alt="" />
                            <div className='portfolio-dec absolute'>
                                <h1 className='text-3xl'>Auto Showroom</h1>
                                <ul className='text-gray-400'>
                                    <a href="/bla">Live Link</a> / <a href="/bla">Sourc Code</a>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='portfolio-slide'>
                        <div className='background'>
                            <img src={project} alt="" />
                        </div>
                        <div className='project-img relative'>
                            <img src={portfolio4} alt="" />
                            <div className='portfolio-dec absolute'>
                                <h1 className='text-3xl'>Auto Showroom</h1>
                                <ul className='text-gray-400'>
                                    <a href="/bla">Live Link</a> / <a href="/bla">Sourc Code</a>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='portfolio-slide'>
                        <div className='background'>
                            <img src={project} alt="" />
                        </div>
                        <div className='project-img relative'>
                            <img src={portfolio5} alt="" />
                            <div className='portfolio-dec absolute'>
                                <h1 className='text-3xl'>Auto Showroom</h1>
                                <ul className='text-gray-400'>
                                    <a href="/bla">Live Link</a> / <a href="/bla">Sourc Code</a>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    );
};

export default Portfolio;