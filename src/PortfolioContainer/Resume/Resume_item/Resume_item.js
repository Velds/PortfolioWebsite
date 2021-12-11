import React from 'react'
import './Resume_item.css'

export default function Resume_item({data, onChildClick, title, subtitle, status, period}) { 
    return (
        <div onClick={onChildClick} className={`button-container flex flex-col pl-5 py-5 ${status ? "active" : "inactive"} my-5`}>
            <div className="button-title text-left"> {title} </div>
            <div className="button-subtitle text-left">{ subtitle }</div>
            <div className="period">{period}</div>
        </div>
    )
}




