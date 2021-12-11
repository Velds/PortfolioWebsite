import React, { useState } from 'react'
import './Resume.css'
import Resume_item from './Resume_item/Resume_item'





class Resume extends React.Component {
    // Active Tab: 0 - Work | 1 - Extra | 2 - Proj
    constructor(props){
        super(props)
        this.state = {
            activeTab: 0,
            workTab: 0,
            extraTab: 0,
            projectTab: 0
        }
    }


    chooseActive(idx){
        this.setState({
            activeTab: idx 
        }); 
    };

    chooseWork(idx){
        console.log("chooseWork", idx);
        this.setState({
            workTab: idx 
        }); 
    }

    chooseExtra(idx){
        this.setState({
            extraTab: idx
        });
    }

    chooseProj(idx){
        this.setState({
            projectTab: idx 
        }); 
    }

    render(){
        return (
            <div className="w-full mt-24 flex flex-col">
               
                <div className="Resume-title text-right pr-24">
                    <span className="primary-text text-right font-bold text-3xl">Portfolio <br /> </span>
                    <span className="resume-paragraph">Here is my experiences that I want to showcase! </span>
                </div>
                <div className="px-10 py-6 mr-1/2">
                    <div className="menu-resume flex relative ">
                        <div className={`px-2 ${this.state.activeTab == 0 ? "menu-active" : ""}`} onClick={() => this.chooseActive(0)}>Work</div>
                        <div className={`px-2 ${this.state.activeTab == 1 ? "menu-active" : ""}`} onClick={() => this.chooseActive(1)}> Extracurricular</div>
                        <div className={`px-2 ${this.state.activeTab == 2 ? "menu-active" : ""}`} onClick={() => this.chooseActive(2)}>Project</div>
                    </div>
                    <div className="flex border-2 border-black rounded resume-container">
                        <div className={`selection-container w-1/2 flex flex-col p-5 relative ${this.state.activeTab === 0 ? "" : "hidden"}`} id="work" >
                            <Resume_item onChildClick={() => this.chooseWork(0)} title="iPYGG Fintech Group Limited" subtitle="Full Stack Developer in Research &#38; Development" status={this.state.workTab === 0 ? true : false} period="July 2021 - Dec 2021"></Resume_item>
                            <Resume_item onChildClick={() => this.chooseWork(1)} title="PT Indonesia Global Solusindo" subtitle="Application Developer" status={this.state.workTab == 1 ? true : false} period="July 2020 - Dec 2020"></Resume_item>
                            <Resume_item onChildClick={() => this.chooseWork(2)} title="PolyU Service Learning and Leadership Office" subtitle="– Student Assistant" status={this.state.workTab == 2 ? true : false} period="Aug 2020"></Resume_item>
                        </div>
                        <div className={`selection-container w-1/2 flex flex-col p-5 relative ${this.state.activeTab === 1 ? "" : "hidden"}`} id="extra">
                            <Resume_item title="iPYGG Fintech Group Limited" subtitle="Full Stack Developer in Research &#38; Development" status={true} period="July 2021 - Dec 2021"></Resume_item>
                            <Resume_item title="PT Indonesia Global Solusindo   " subtitle=" Application Developer" status={false} period="July 2020 - Dec 2020"></Resume_item>
                            <Resume_item title="PolyU Service Learning and Leadership Office" subtitle="– Student Assistant" status={false} period="Aug 2020"></Resume_item>
                        </div>
                        <div className={`selection-container w-1/2 flex flex-col p-5 relative ${this.state.activeTab === 2 ? "" : "hidden"}`} id="proj">
                            <Resume_item title="iPYGG Fintech Group Limited" subtitle="Full Stack Developer in Research &#38; Development" status={true} period="July 2021 - Dec 2021"></Resume_item>
                            <Resume_item title="PT Indonesia Global Solusindo   " subtitle=" Application Developer" status={false} period="July 2020 - Dec 2020"></Resume_item>
                            <Resume_item title="PolyU Service Learning and Leadership Office" subtitle="– Student Assistant" status={false} period="Aug 2020"></Resume_item>
                        </div>
                        <div className="experiences-container w-1/2">
                            {/* Work experience tab */}
                            <div className={`experience-text h-full flex items-center ${this.state.workTab ===  0 ? "" : "hidden"}`}  id="work-1">
                                <ul className='experience-ul'>
                                    <li>Participated in Creating, Maintaining, and Executing PHP admin Server and its’ API with HMVC
                                    architecture with CodeIgniter</li>
                                    <li>Progressive application development with Ionic and Angular Typescript to implement stateful
    behaviors for the application</li>
                                    <li>Delivered the company main product that is listed on both google play store and app store
    (iPYGG)</li>
                                    <li>Collaborated in a team of 5 to deliver the company main product and the company’s B2B
    functions. </li>
                                    <li>Experienced with implementing wireframes to a real design from designer software (e.g., Figma)</li>
                                    <li>Mastered and taught engineering group’s best practices and standard </li>
                                </ul>
                            </div>
                            <div className={`experience-text h-full flex items-center ${this.state.workTab ===  1 ? "" : "hidden"}`} id="work-2">
                                <ul className="experience-ul">
                                    <li>Migrating the company dashboard for internal resource management that are used by the
        company for internal managements with the next framework version</li>
                                    <li>Internal Database migration to a new framework version using MySQL</li>
                                    <li>Redesigned and coded the Company internal dashboard with HTML Bootstrap and CSS</li>
                                    <li>Collaborated with colleagues remotely using zoom meetings</li> 
                                </ul>
                            </div>
                            <div className={`experience-text h-full flex items-center ${this.state.workTab ===  2 ? "" : "hidden"}`} id="work-3">
                                <ul className="experience-ul">
                                    <li>Assisted in changing and developing the course website that is hosted on KEEP education website that are
    used by the school service learning courses</li>
                                    <li>Design implementation with HTML CSS</li>
                                </ul>
                            </div>
    
                            {/* Extracurricular experience tab */}
                            <div className="experience-text hidden" id="ext-1">
                        
                            </div>
    
                            <div className="experience-text hidden" id="ext-2">
                        
                            </div>
    
                            <div className="experience-text hidden" id="ext-3">
                        
                            </div>
                            {/* Projects */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Resume
