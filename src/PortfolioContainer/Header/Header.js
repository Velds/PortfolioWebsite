import React, {useEffect, useState} from 'react'
import './Header.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Header() {
    const [stickyClass, setStickyClass] = useState('relative');
    // 
    const [activeSection, setActiveSection] = useState(0)
    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
    
        return () => {
          window.removeEventListener('scroll', stickNavbar);
        };
      }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            let currentHeight = window.pageYOffset; 
            if(windowHeight > 650){
                // console.log("section2");
                setActiveSection(2);
            }
            else if(windowHeight > 500){
                // console.log("section1");
                setActiveSection(1); 
            }
            else{
                // console.log("section0");
                setActiveSection(0);
            }

            console.log("active section", activeSection, " height: ", windowHeight);
            windowHeight > 100 ? setStickyClass('fixed top-3 left-0 z-50') : setStickyClass('relative');
        }
    };
    return (
        <div className={`flex justify-between ${stickyClass} w-full header-bg`}>
            <div className="logo">
                
            </div>
            <div className={`header-container flex justify-center w-100  text-m font-bold `}>
                <AnchorLink href="#profile" className={`uppercase px-2 header-menu ${activeSection === 0 ? "active-header" : ""}`}>About</AnchorLink>
                <AnchorLink href="#portfolio" className={`uppercase px-2 header-menu ${activeSection === 1 ? "active-header" : ""}`} >Portfolio</AnchorLink>
                <AnchorLink href="#skill" className={`uppercase px-2 header-menu ${activeSection === 2 ? "active-header" : ""}`}>Skill</AnchorLink>
                {/* <a href="#" className="uppercase px-2 header-menu">Lab</a> */}
            </div>
            <div className="socialMedia flex items-center">
                <a href="https://www.linkedin.com/in/nicholas-matthew-kurniadi-5b28a21ab/" target="_blank" className="text-xl px-2"><FaLinkedin /></a>
                <a href="https://github.com/Velds/PortfolioWebsite" target="_blank" className="text-xl px-2"><FaGithub /></a>
            </div>
        </div>
    )
}
