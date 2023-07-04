import React from 'react';
import './Water.css';

const Water = () => {

    return (
        <footer className='absolute bottom-0 z-[60] h-[230px]'>
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
        </footer>
    );
};

export default Water;