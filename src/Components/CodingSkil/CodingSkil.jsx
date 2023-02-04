import React, { Component } from 'react';
import './CodingSkil.css';
import handleViewport from 'react-in-viewport';


class CodingSection extends Component {

    getStyle() {

        const { inViewport, enterCount } = this.props;

        if (inViewport && enterCount === 1) {
            return { WebkitTransition: 'opacity 0.75s ease-in-out' };
        }
        else if (!inViewport && enterCount < 1) {
            return { WebkitTransition: 'none', opacity: '0' };
        }
        else {
            return {};
        }

    }

    render() {

        const { enterCount } = this.props;

        return (
            <section
                id='skills'
                className={`${enterCount ? 'conding-skills-section' : ''} bg-[#2A2C39] pb-[60px]`}
            >
                <div className='coding-skills-intro text-white'>
                    <h3 className='text-gray-400'>|| Developing On</h3>
                    <h1 className='coding-section-intro mt-6'>Coding Skills.</h1>
                </div>

                <div className={`${!enterCount ? 'hidden' : ''} skills-container mt-10`}>

                    <div className='card'>
                        <div className={`${enterCount ? 'percent' : ''}`} style={{ "--clr": "#fff", "--num": 95 }}
                        >
                            <div className={`${enterCount ? 'dot' : ''}`}></div>
                            <svg>
                                <circle cx='70' cy='70' r='70'></circle>
                                <circle cx='70' cy='70' r='70'></circle>
                            </svg>
                            <div className={`${enterCount ? 'number' : ''}`}>
                                <h2>95 %</h2>
                            </div>
                        </div>
                        <h1 className='text-2xl my-4 uppercase text-gray-300'>Html, Css</h1>

                    </div>

                    <div className='card'>
                        <div className={`${enterCount ? 'percent' : ''}`} style={{ "--clr": "#fff", "--num": 80 }}
                        >
                            <div className={`${enterCount ? 'dot' : ''}`}></div>
                            <svg>
                                <circle cx='70' cy='70' r='70'></circle>
                                <circle cx='70' cy='70' r='70'></circle>
                            </svg>
                            <div className={`${enterCount ? 'number' : ''}`}>
                                <h2>80 %</h2>
                            </div>
                        </div>
                        <h1 className='text-2xl my-4 uppercase text-gray-300'>JavaScript</h1>

                    </div>

                    <div className='card'>
                        <div className={`${enterCount ? 'percent' : ''}`} style={{ "--clr": "#fff", "--num": 90 }}
                        >
                            <div className={`${enterCount ? 'dot' : ''}`}></div>
                            <svg>
                                <circle cx='70' cy='70' r='70'></circle>
                                <circle cx='70' cy='70' r='70'></circle>
                            </svg>
                            <div className={`${enterCount ? 'number' : ''}`}>
                                <h2>90 %</h2>
                            </div>
                        </div>
                        <h1 className='text-2xl my-4 uppercase text-gray-300'>React.js</h1>

                    </div>

                    <div className='card'>
                        <div className={`${enterCount ? 'percent' : ''}`} style={{ "--clr": "#fff", "--num": 85 }}
                        >
                            <div className={`${enterCount ? 'dot' : ''}`}></div>
                            <svg>
                                <circle cx='70' cy='70' r='70'></circle>
                                <circle cx='70' cy='70' r='70'></circle>
                            </svg>
                            <div className={`${enterCount ? 'number' : ''}`}>
                                <h2>85 %</h2>
                            </div>
                        </div>
                        <h1 className='text-2xl my-4 uppercase text-gray-300'>Node.js</h1>

                    </div>

                    <div className='card'>
                        <div className={`${enterCount ? 'percent' : ''}`} style={{ "--clr": "#fff", "--num": 85 }}
                        >
                            <div className={`${enterCount ? 'dot' : ''}`}></div>
                            <svg>
                                <circle cx='70' cy='70' r='70'></circle>
                                <circle cx='70' cy='70' r='70'></circle>
                            </svg>
                            <div className={`${enterCount ? 'number' : ''}`}>
                                <h2>85 %</h2>
                            </div>
                        </div>
                        <h1 className='text-2xl my-4 uppercase text-gray-300'>Express.js</h1>

                    </div>

                    <div className='card'>
                        <div className={`${enterCount ? 'percent' : ''}`} style={{ "--clr": "#fff", "--num": 90 }}
                        >
                            <div className={`${enterCount ? 'dot' : ''}`}></div>
                            <svg>
                                <circle cx='70' cy='70' r='70'></circle>
                                <circle cx='70' cy='70' r='70'></circle>
                            </svg>
                            <div className={`${enterCount ? 'number' : ''}`}>
                                <h2>90 %</h2>
                            </div>
                        </div>
                        <h1 className='text-2xl my-4 uppercase text-gray-300'>MongoDb</h1>

                    </div>

                    <div className='card'>
                        <div className={`${enterCount ? 'percent' : ''}`} style={{ "--clr": "#fff", "--num": 20 }}
                        >
                            <div className={`${enterCount ? 'dot' : ''}`}></div>
                            <svg>
                                <circle cx='70' cy='70' r='70'></circle>
                                <circle cx='70' cy='70' r='70'></circle>
                            </svg>
                            <div className={`${enterCount ? 'number' : ''}`}>
                                <h2>20 %</h2>
                            </div>
                        </div>
                        <h1 className='text-2xl my-4 uppercase text-gray-300'>TypeScript</h1>

                    </div>

                    <div className='card'>
                        <div className={`${enterCount ? 'percent' : ''}`} style={{ "--clr": "#fff", "--num": 30 }}
                        >
                            <div className={`${enterCount ? 'dot' : ''}`}></div>
                            <svg>
                                <circle cx='70' cy='70' r='70'></circle>
                                <circle cx='70' cy='70' r='70'></circle>
                            </svg>
                            <div className={`${enterCount ? 'number' : ''}`}>
                                <h2>30 %</h2>
                            </div>
                        </div>
                        <h1 className='text-2xl my-4 uppercase text-gray-300'>Redux</h1>

                    </div>

                    <div className='card'>
                        <div className={`${enterCount ? 'percent' : ''}`} style={{ "--clr": "#fff", "--num": 25 }}
                        >
                            <div className={`${enterCount ? 'dot' : ''}`}></div>
                            <svg>
                                <circle cx='70' cy='70' r='70'></circle>
                                <circle cx='70' cy='70' r='70'></circle>
                            </svg>
                            <div className={`${enterCount ? 'number' : ''}`}>
                                <h2>25 %</h2>
                            </div>
                        </div>
                        <h1 className='text-2xl my-4 uppercase text-gray-300'>React Native</h1>

                    </div>

                </div>
            </section>
        );
    }
}
const CodingSkil = handleViewport(CodingSection, { rootMargin: '-1.0px' });

export default CodingSkil;