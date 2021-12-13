import React, {useState, prev} from 'react'
import './Resume_item.css'
import ReactCardFlip from 'react-card-flip';


import FlipCard from './FlipCard';

export default function Resume_item({data, onChildClick, title, subtitle, status, period}) { 

    const [isFlipped, setFlip] = useState({
        isFlipped: true
    })

    const flipHandler = (e) => {
        console.log("testing flip")
        e.preventDefault();
        setFlip(prevState => ({ isFlipped: !prevState.isFlipped }));
        console.log("isFlipped: ", isFlipped)
    }
    return (
        // Testing flip
        // <div onClick={onChildClick} className={`button-container flex flex-col pl-5 py-5 ${status ? "active" : "inactive"} my-5`}>
        //     <div className="button-title text-left"> {title} </div>
        //     <div className="button-subtitle text-left">{ subtitle }</div>
        //     <div className="period">{period}</div>
        // </div>
       <div className="card rounded px-2 py-2 flex items-center justify-center border-2 border-black">
           Testing
       </div>
    )
}




