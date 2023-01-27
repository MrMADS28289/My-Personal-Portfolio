import React from 'react';
import './AboutMe.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import masum from '../../Assets/Images/me/masum.jpeg';
import masum1 from '../../Assets/Images/me/masum1.jpeg';
import masum2 from '../../Assets/Images/me/masum2.jpeg';
import masum3 from '../../Assets/Images/me/masum3.jpeg';
import masum4 from '../../Assets/Images/me/masum4.jpeg';
import masum5 from '../../Assets/Images/me/masum5.jpg';
import masum6 from '../../Assets/Images/me/masum6.jpg';

const AboutMe = () => {
    return (
        <section
            id='about'
            className='about-section bg-[var(--primary)] text-white'>
            <div className='about-intro text-white'>
                <h3 className='text-gray-400'>|| My Story</h3>
                <h1 className='text-4xl my-6'>About Me.</h1>
            </div>
            <div className='about-dec text-gray-300'>
                <div className='about-slide-container'>

                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="cards-swiper"
                    >
                        <SwiperSlide className='card-slide'><img src={masum} alt="" /></SwiperSlide>
                        <SwiperSlide className='card-slide'><img src={masum1} alt="" /></SwiperSlide>
                        <SwiperSlide className='card-slide'><img src={masum2} alt="" /></SwiperSlide>
                        <SwiperSlide className='card-slide'><img src={masum3} alt="" /></SwiperSlide>
                        <SwiperSlide className='card-slide'><img src={masum4} alt="" /></SwiperSlide>
                        <SwiperSlide className='card-slide'><img src={masum5} alt="" /></SwiperSlide>
                        <SwiperSlide className='card-slide'><img src={masum6} alt="" /></SwiperSlide>
                    </Swiper>

                    <p className='about-slide-p'>Hello, my name is Masum Abduss Sobhan, and I am a 19-year-old MERN stack developer. I have a passion for web development and have been honing my skills in the field for a while now. I discovered the power of the MERN stack (MongoDB, Express.js, React.js, and Node.js) and knew that this was the path I wanted to pursue. I am skilled in creating innovative and interactive web applications using this stack. I am particularly adept at creating responsive and dynamic user interfaces using React.js, and I have experience working with MongoDB, a popular NoSQL database. I am comfortable with both SQL and NoSQL databases. </p>
                </div>

                <p className='my-6'>I am a hardworking and dedicated developer who is always looking to improve my skills and stay up-to-date with the latest technologies. I am a quick learner and am always willing to take on new challenges. In addition to web development, I am also interested in other areas of computer science such as machine learning and artificial intelligence. I am excited to see where my passion for web development will take me in the future.</p>

                <p>If you're looking for a talented and ambitious MERN stack developer, look no further than me, Masum Abduss Sobhan.</p>
            </div>

            <div className='my-info md:flex justify-between py-[80px]'>
                <ul className='flex'>
                    <ul className='info-point mr-20'>
                        <li className='text-gray-400'>AGE:</li>
                        <li className='text-gray-400'>RESIDENCE:</li>
                        <li className='text-gray-400'>FREELANCE:</li>
                    </ul>
                    <ul>
                        <li>19</li>
                        <li>BD</li>
                        <li>Available</li>
                    </ul>
                </ul>
                <ul className='flex'>
                    <ul className='info-point mr-20'>
                        <li className='text-gray-400'>ADDRESS:</li>
                        <li className='text-gray-400'>PHONE:</li>
                        <li className='text-gray-400'>E-MAIL:</li>
                    </ul>
                    <ul>
                        <li>Jhenaidah</li>
                        <li>+880 1734326573</li>
                        <li>abduss.sobhan28@gmail.com</li>
                    </ul>
                </ul>
            </div>
        </section>
    );
};

export default AboutMe;