import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return(
            <div>
                <button className='btn' onClick={this.props.actionBtn}>{this.props.name}</button>
            </div>
        );
    }
}


export default Button;