import './Resume.css'
import Resume_item from './Resume_item/Resume_item'
import React, { useState } from 'react'
import FlipCard from './Resume_item/FlipCard'
import resumeCards from './resumeCard'



export default function Resume() {
    // Active Tab: 0 - Work | 1 - Extra | 2 - Proj

    const [state, setState] = useState({
        activeTab: 0,
        workTab: 0,
        extraTab: 0,
        projectTab: 0
    })
    // constructor(props){
    //     super(props)
    //     state = {
            
    //     }
    // }
    

    const chooseActive = (idx) => {
        setState({
            activeTab: idx 
        })
    }
    // chooseActive(idx){
    //     setState({
    //         activeTab: idx 
    //     }); 
    // };


    const chooseWork = (idx) => {
        setState({
            workTab: idx 
        })
    }
    // chooseWork(idx){
    //     console.log("chooseWork", idx);
    //     setState({
    //         workTab: idx 
    //     }); 
    // }
    const chooseExtra = (idx) => {
        setState({
            extraTab: idx 
        })
    }
    // chooseExtra(idx){
    //     setState({
    //         extraTab: idx
    //     });
    // }


    const chooseProj = (idx) => {
        setState({
            projectTab: idx 
        })
    }
    // chooseProj(idx){
    //     setState({
    //         projectTab: idx 
    //     }); 
    // }ex

    
        return (
            <div className="w-full mt-24 flex flex-col">
               
                <div className="Resume-title text-right pr-24">
                    <span className="primary-text text-right font-bold text-3xl">Portfolio <br /> </span>
                    <span className="resume-paragraph">Here is my experiences that I want to showcase! </span>
                </div>
                <div className="pl-24 pr-10 py-6 mr-1/2">
                    <div className="menu-resume flex relative ">
                        <div className={`px-2 ${state.activeTab === 0 ? "menu-active" : ""}`} onClick={() => chooseActive(0)}>Work</div>
                        <div className={`px-2 ${state.activeTab === 1 ? "menu-active" : ""}`} onClick={() => chooseActive(1)}> Extracurricular</div>
                        {/* <div className={`px-2 ${state.activeTab === 2 ? "menu-active" : ""}`} onClick={() => chooseActive(2)}>Project</div> */}
                    </div>
                    <div className="flex border-2 border-black rounded resume-container">
                        <div className={`selection-container w-full flex p-5 relative overflow-auto justify-center ${state.activeTab === 0 ? "" : "hidden"}`} id="work" >
                            {resumeCards.workCards.map((card) => (
                                <FlipCard key={card.id} card={card} />
                            ))} 
                        </div>
                        <div className={`selection-container w-full flex p-5 relative justify-center ${state.activeTab === 1 ? "" : "hidden"}`} id="extra">
                        {resumeCards.extraCurricular.map((card) => (
                                <FlipCard key={card.id} card={card} />
                            ))} 
                        </div>
                    </div>
                </div>
            </div>
        );
    
}


