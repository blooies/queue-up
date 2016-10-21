import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

export default class Header extends Component {
    redirectToLogin() {
       const path = '/signIn';
       browserHistory.push(path); 
    }
    showUserNavigaton() {
        return !!Meteor.user();
    }

    render() {
        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="navbar-container">
                    <h4 id='navbar-title'>{this.props.title}</h4>
                    <div onClick={this.redirectToLogin} className='login-btn'>
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