import './Banner.css';
import background from '../../Assets/Videos/background.mp4';
import me from '../../Assets/Images/me.png';
import { AiOutlineDownload } from 'react-icons/ai';
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {

    return (
        <div className='h-[6300px] w-full relative overflow-hidden'>

            <div className='absolute top-0 left-0 h-full w-full bg-[#000000c2]' />
            <video className='video' src={background} loop muted autoPlay />

            <div className='absolute w-full h-full top-0 text-white flex mx-16'>
                <div className='intro w-[50%] h-full mt-20'>
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
                    <button className='flex items-center justify-center gap-2 h-[50px] w-[150px] text-gray-300 border border-[#252734] rounded-full hover:bg-[#252734] duration-300 mt-10'>Get Resume <AiOutlineDownload /></button>
                </div>

                <div className='w-[50%] h-full'>
                    <img className='absolute bottom-0 max-h-[500px]' src={me} alt="Masum Abduss Sobhan" />
                </div>
            </div>

        </div>
    );
};

export default Banner;