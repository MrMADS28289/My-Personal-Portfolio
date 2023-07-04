import React from 'react';
import './Water.css';
import cloud from '../../Assets/nature/cloud.png';
// import deep from '../../Assets/nature/deep-water.pn;g';
import forest from '../../Assets/nature/forest.png';
import hill from '../../Assets/nature/hill.png';
import hillD from '../../Assets/nature/hillD.png';
// import ston from '../../Assets/nature/ston.pn;g';
import sun from '../../Assets/nature/sun.png';
import tree from '../../Assets/nature/tree.png';
import water from '../../Assets/nature/water.png';
import Water from './Water';

const Bannner = () => {
    return (
        <section className='h-[900px] w-[1500px] bg-black'>
            <div className='bg-sky-300 w-[1200px] h-[900px] mx-auto relative'>
                <img className='w-[800px] absolute top-0 right-1' src={cloud} alt="" />
                {/* <img className='w-[1000px] top-0' src={forest} alt="" /> */}
                <img className='w-[300px] absolute top-0' src={sun} alt="" />
                <img className='w-[1200px] absolute bottom-[180px] z-40 left-0' src={tree} alt="" />
                <img className='w-[1200px] absolute bottom-[180px] z-39 left-0' src={forest} alt="" />
                <img className='w-[1200px] absolute bottom-[130px] z-[45] left-0 ' src={hillD} alt="" />
                <img className='h-[900px] absolute bottom-[30px] z-[30] left-40 ' src={hill} alt="" />
                <img className='w-[1200px] absolute bottom-0 z-50 left-0 ' src={water} alt="" />
                <Water />
            </div>
        </section>
    );
};

export default Bannner;