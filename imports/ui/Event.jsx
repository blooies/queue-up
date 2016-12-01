import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

export default class Event extends Component {
    redirectToNumberSubmission() {
       const path = '/submitNumber';
       browserHistory.push(path); 
    }

    viewDetails() {
        const path = '/' + this.props.event.key;
        browserHistory.push(path);
    }

    render() {
        return (
            <div className='event-card'>
                <h3>{this.props.event.name}</h3>
                <p>{this.props.event.date}</p>
                <div className='card-tabs'>
                    <div className='log-num' onClick={this.redirectToNumberSubmission}>Add attendees</div>
                    <div onClick={this.viewDetails}>View details</div>
                </div>
            </div>
        );
    }
}