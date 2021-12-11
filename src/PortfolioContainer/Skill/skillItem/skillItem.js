import React from 'react'

export default function skillItem({name, color}) {
    return (
        <div className={`px-2 py-2 rounded shadow-md`} style={{backgroundColor: color}}>
            {name} 
        </div>
    )
}
