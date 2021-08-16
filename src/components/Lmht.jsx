import React, { Component } from 'react';
import { FaCheckCircle } from "react-icons/fa";

class Lmht extends Component {
    render() {
        return (
            <div className="Lmht">
                <div >
                    <img className="Lmht__img" src={this.props.img} alt="" />
                </div>
                <div className="Lmht__tille">
                    <p>{this.props.title}</p>
                </div>
                <div className="Lmht__channel">
                    <span>{this.props.channel}</span>
                    <FaCheckCircle />
                </div>
                <div className="Lmht__view">
                    <span>{this.props.view}</span>
                </div>
            </div>
        );
    }
}

export default Lmht;