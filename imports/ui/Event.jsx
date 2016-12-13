import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import ListBatches from './ListBatches.jsx';

export default class Event extends Component {
    constructor(props) {
        super(props);
        this.viewDetails = this.viewDetails.bind(this);
    }

    redirectToNumberSubmission() {
       const path = '/submitNumber';
       browserHistory.push(path); 
    }

    viewDetails() {
        var batches = BatchController.getBatches(this.props.event);
        console.log('batches!!!', batches)
        return (
            <div>
                <ListBatches batches={batches}
                />
            </div>
        )
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