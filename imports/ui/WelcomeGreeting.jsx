import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import MessageBox from './Message.jsx';

export default class WelcomeGreeting extends Component {
    render() {
        return (
            <div className="story">
                <h1>QueueUp</h1>
                <MessageBox text="An app to help you manage your event's queues more efficiently."/>
            </div>
        )
    }
}