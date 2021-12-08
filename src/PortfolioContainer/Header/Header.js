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
                <a href="#" className="uppercase px-2 hover:bg-gray-100 active-header">About</a>
                <a href="#" className="uppercase px-2 hover:bg-gray-100" >Portfolio</a>
                <a href="#" className="uppercase px-2 hover:bg-gray-100">Skill</a>
                <a href="#" className="uppercase px-2 hover:bg-gray-100">Lab</a>
            </div>
            <div className="socialMedia flex items-center">
                <a href="#" className="text-xl px-2"><FaLinkedin /></a>
                <a href="#" className="text-xl px-2"><FaGithub /></a>
            </div>
        </div>
    )
}
