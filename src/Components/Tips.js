import React from 'react';
import  '../App.css';
export default class Tips extends React.Component {
    render() {
        return (
            <div className="Tips">
                <h4>{this.props.tips.map((tip,index)=>{
                    return <li key={index}>{tip}</li>
                })}</h4>

            </div>
        );
    }
}