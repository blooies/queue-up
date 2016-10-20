import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

export default class Header extends Component {
    getTitle() {
        return this.state.title;
    }

    render() {
        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="navbar-container">
                    <h4 id='navbar-title'>{this.getTitle}</h4>
                    <div className='login-btn'>
                        Sign In
                    </div>
                    <div className='logout-btn'>
                        Log Out
                    </div>
                    <div className='add-events'>
                        Add Events
                    </div>
                    <div className='glyphicon glyphicon-plus'></div>
                </div>
            </nav>
        );
    }
}