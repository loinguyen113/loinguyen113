import React, { Component } from 'react';
import { FaMusic } from "react-icons/fa";
class Dtcl extends Component {
    render() {
        return (
            <div className="dtcl">
                <img className="dtcl__img" src={this.props.img} alt="" />
                <div className="dtcl__info">
                    <div className="dtcl__title dtcl--100">
                        {this.props.title}
                    </div>
                    <div className="dtcl--100">
                        <p className="dtcl__text">
                            {this.props.channel}                           
                        </p>
                        
                        <p className="dtcl__text">
                           <FaMusic /> {this.props.view}
                        </p>
                    </div>
                    <span className="dtcl__text dtcl--100">
                            {this.props.info}
                    </span>
                </div>
            </div>
        );
    }
}

export default Dtcl;