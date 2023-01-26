import './Banner.css';
import background from '../../Assets/Videos/background.mp4';
import me from '../../Assets/Images/me.png';
import { AiOutlineDownload, AiOutlineGithub } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {

    return (
        <div
            id='home'
            className='banner-container w-full relative overflow-hidden'>

            <div className='absolute top-0 left-0 h-full w-full bg-[#2a2c39da]' />
            <video className='video' src={background} loop muted autoPlay />

            <div className='intro-container absolute w-full h-full top-0 text-white flex-none lg:flex mt-14'>
                <div className='intro w-full lg:w-[40%] h-full mt-20'>
                    <h1 className='hello text-gray-300'>Hello! I'm</h1>
                    <h3 className='my-name'>
                        <Typewriter
                            words={[
                                "Masum Abduss Sobhan",
                            ]}
                            loop={false}
                            cursor
                            cursorStyle="|"
                            typeSpeed={30}
                            deleteSpeed={60}
                            delaySpeed={3000}
                        />
                    </h3>
                    <p className='intro-dec w-[95%] text-gray-300'>Highly motivated and very passionate Full Stack Developer with one years of experience in MERN Stack. And Specializing in UI/UX Development.</p>

                    <div className='intro-btn flex justify-start items-center'>
                        <button className='flex items-center justify-center gap-2 h-[60px] w-[160px] text-white tracking-wide border border-[#323548] rounded-full hover:bg-[#323548] duration-300'>Get Resume <AiOutlineDownload /></button>
                        <div className='w-[30px] border-t border-[#323548]' />
                    </div>
                </div>

                <div className='h-full'>

                    <div className=''>
                        <div className='flex absolute bottom-[-20px]'>

                            <div className='intro-shape-one flex justify-center border-r border-gray-700 rounded-full'>

                                <div className='intro-shape-tow flex justify-center border-r border-gray-300 rounded-full mt-10'>

                                    <div className='intro-shape-three border-r border-gray-700 rounded-full mt-10' />
                                </div>

                            </div>
                        </div>

                        <a
                            className='github absolute border border-gray-200 rounded-full p-2 bg-[#2A2C39] hover:bg-white hover:text-black duration-300'
                            href="https://github.com/MrMADS28289" target="blank">
                            <AiOutlineGithub />
                        </a>
                        <a
                            className='linkedin absolute border border-gray-200 rounded-full p-2 bg-[#2A2C39] hover:bg-white hover:text-black duration-300'
                            href="https://www.linkedin.com/in/abduss-sobhan/" target="blank">
                            <FaLinkedinIn />
                        </a>
                        <a
                            className='facebook absolute border border-gray-200 rounded-full p-2 bg-[#2A2C39] hover:bg-white hover:text-black duration-300'
                            href="https://www.facebook.com/Mr.Mads2" target='blank'>
                            <FaFacebookF />
                        </a>
                        <a
                            className='twitter absolute border border-gray-200 rounded-full p-2 bg-[#2A2C39] hover:bg-white hover:text-black duration-300'
                            href="https://www.facebook.com/Mr.Mads2" target='blank'>
                            <FaTwitter />
                        </a>
                    </div>

                    <img className='intro-img absolute bottom-0 grayscale-[0.3]' src={me} alt="Masum Abduss Sobhan" />
                </div>
            </div>

        </div>
    );
};

export default Banner;