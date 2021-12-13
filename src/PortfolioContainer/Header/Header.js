import React from 'react'
import './Header.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Header() {
    return (
        <div className="flex justify-between">
            <div className="logo">
                Nic
            </div>
            <div className="header-container flex justify-center w-100  text-m font-bold ">
                <a href="#" className="uppercase px-2 active-header header-menu">About</a>
                <a href="#" className="uppercase px-2 header-menu" >Portfolio</a>
                <a href="#" className="uppercase px-2 header-menu">Skill</a>
                <a href="#" className="uppercase px-2 header-menu">Lab</a>
            </div>
            <div className="socialMedia flex items-center">
                <a href="#" className="text-xl px-2"><FaLinkedin /></a>
                <a href="#" className="text-xl px-2"><FaGithub /></a>
            </div>
        </div>
    )
}
