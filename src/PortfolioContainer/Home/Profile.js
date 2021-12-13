import React from 'react'
import './Profile.css'
import * as Icons from "@heroicons/react/solid"
import ReactTypingEffect from 'react-typing-effect';
import { FaLinkedin, FaGithub, FaReact } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Profile() {
    const logo = require('../../Assets/start.svg').default;

    return (
        <section id="profile">
            <div className="profile-container mt-10 flex pl-2">
                {/* Put icons here if I need  */}
                <div className="profile-parent">
                    <div className="profile-details">
                        <div className="cols">
                            
                        </div>
                    </div>
                </div>
                <div className="profile-root w-full flex">    
                    <div className="profile-details-name flex flex-col w-1/2 pl-24 mt-10">
                        <div className="text-left">
                            <span className="primary-text text-left font-bold text-3xl">Hi <br /> </span>
                        </div>
                        <div className="flex align-left">
                            <h1 className="text-3xl">I'm&nbsp;
                            <ReactTypingEffect
                                text={[" a Learner", " a Full-Stack Developer", " an Angular/Typescript Developer", " a React Developer"]}
                                speed={200}
                                typingDelay={1000}
                            />
                            </h1>
                        </div>
                        <div className="introduction text-left mt-5">
                            Hello, I'm Nicholas, I like to try out new things and building stuff. I am a soon to graduate from Hong Kong Polytechnic University 
                        </div>
                        <div className="introduction2 text-left">
                            -- <br />
                            Currently, I am experimenting with React.js, Tailwind, and Node.js. <br />
                            <span>
                                This would be my first online portfolio, it's a static website (for now) but feel free to reach out and contact me if you are interested in me and/or have some feedback for this website!
                            </span>
                        </div>
                        <div className="showMore mt-8 text-left">
                            <AnchorLink href="#portfolio" className="border-2 px-2 py-2 border-black hover:border-gray-600 rounded">
                                Show More
                            </AnchorLink>
                        </div>
                    </div>
                    {/*  Kinda looks bad ? */}
                    <div className="icon w-1/2 flex items-center justify-center pt-10">
                    <img src={logo} className="logo-start" alt="start"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
