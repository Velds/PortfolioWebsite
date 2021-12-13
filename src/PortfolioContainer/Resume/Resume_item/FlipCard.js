import React, { useState } from 'react'
import './FlipCard.scss'


export default function FlipCard({card}) {
    const [showBack, setShowBack] = useState(false);

    const handleClick = () => {
        if(card.variant == "click"){
            console.log("click", card);
            setShowBack(!showBack);
        }
    }
    const handleFocus = () => {
        if(card.variant == "focus"){
            console.log("focusing~");
            setShowBack(true);
        }
    }
    const handleBlur = () => {
        if(card.variant == "blur"){
            console.log("blurring~");
            setShowBack(false);
        }
    }
    return (
        <div 
        className={`flip-card-outer`} 
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        >
            <div className= {`flip-card-inner ${showBack ? "showBack" : ""} ${card.variant =='focus' ? "focus-trigger": ""} `}>
                <div className="card front flex rounded shadow-lg">
                    <div className="card-body flex justify-start flex-col px-5">
                        <div className="card-text mt-10 text-xl font-bold text-left">{card.front.title}</div>
                        <div className="card-subtext mt-2 text-lg text-left">{card.front.subtitle}</div>
                        <div className="date-period text-sm text-left">{card.front.period}</div>
                    </div>
                </div>
                <div className="card back overflow-hidden border-2 border-black rounded">
                    <div className="card-body flex justify-center items-center">
                        <ul className="card-text text-sm text-left px-5 mt-10 ">
                        {card.back.map((item) => (
                                <li className="my-2"> {item} </li>
                        ))} 
                        </ul>
                    {/* <p className="card-text text-xl font-bold">{card.back.map}</p> */}
                    </div>
                </div>
            </div>
      </div>
    )
}
