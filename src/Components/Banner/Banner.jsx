import './Banner.css';
import background from '../../Assets/Videos/background.mp4';
import me from '../../Assets/Images/me.png';
import { AiOutlineDownload, AiOutlineGithub } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {

    return (
        <div className='h-[600px] w-full relative overflow-hidden'>

            <div className='absolute top-0 left-0 h-full w-full bg-[#000000ac]' />
            <video className='video' src={background} loop muted autoPlay />

            <div className='absolute w-full h-full top-0 text-white flex mx-16 mt-14'>
                <div className='intro w-[40%] h-full mt-20'>
                    <h1 className='text-3xl text-gray-300'>Hello! I'm</h1>
                    <h3 className='text-4xl mt-3'>
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
                    <p className='text-xs text-gray-400 mt-6'>MERN Stack Developer, Specializing in UI/UX Developments.</p>

                    <button className='flex items-center justify-center gap-2 h-[60px] w-[160px] text-white border border-[#252734] rounded-full hover:bg-[#252734] duration-300 mt-10'>Get Resume <AiOutlineDownload /></button>
                </div>

                <div className='h-full'>

                    <div className='flex absolute bottom-[-20px]'>

                        <div className='h-[500px] w-[500px] flex justify-center border-r border-gray-700 rounded-full'>

                            <div className='h-[400px] w-[400px] flex justify-center border-r border-gray-300 rounded-full mt-10'>

                                <div className='h-[300px] w-[300px] border-r border-gray-700 rounded-full mt-10' />
                            </div>

                        </div>
                    </div>

                    <a
                        className='absolute border border-gray-200 rounded-full p-2 mt-[170px] ml-[330px] bg-black hover:bg-white hover:text-black duration-300'
                        href="https://github.com/MrMADS28289" target="blank">
                        <AiOutlineGithub />
                    </a>
                    <a
                        className='absolute border border-gray-200 rounded-full p-2 mt-[250px] ml-[410px] bg-black hover:bg-white hover:text-black duration-300'
                        href="https://www.linkedin.com/in/abduss-sobhan/" target="blank">
                        <FaLinkedinIn />
                    </a>
                    <a
                        className='absolute border border-gray-200 rounded-full p-2 mt-[360px] ml-[430px] bg-black hover:bg-white hover:text-black duration-300'
                        href="https://www.facebook.com/Mr.Mads2" target='blank'>
                        <FaFacebookF />
                    </a>
                    <a
                        className='absolute border border-gray-200 rounded-full p-2 mt-[465px] ml-[390px] bg-black hover:bg-white hover:text-black duration-300'
                        href="https://www.facebook.com/Mr.Mads2" target='blank'>
                        <FaTwitter />
                    </a>


                    <img className='absolute bottom-0 max-h-[500px] grayscale-[0.3]' src={me} alt="Masum Abduss Sobhan" />
                </div>
            </div>

        </div>
    );
};

export default Banner;