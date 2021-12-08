import React from 'react'
import './Resume_item.css'

class Resume_item extends React.Component { 
    render(){
        return (
            <div className={`button-container flex flex-col pl-5 py-5 ${this.props.status ? "active" : "inactive"} my-5`}>
                <div className="button-title text-left"> {this.props.title} </div>
                <div className="button-subtitle text-left">{ this.props.subtitle }</div>
                <div className="period">{this.props.period}</div>
            </div>
        )
    }
}

export default Resume_item


