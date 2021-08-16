import React, { Component } from 'react';

class Icon extends Component {
    render() {
        return (
            <div className="icon">
                <div className="icon__icon">
                    <img src={this.props.icon} alt="" />
                </div>
                <div className="icon__ten">
                    <h3>{this.props.ten}</h3>
                </div>
            </div>
        );
    }
}

export default Icon;