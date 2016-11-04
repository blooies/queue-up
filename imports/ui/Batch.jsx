import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

export default class Batch extends Component {
    constructor(props) {
        super(props);

        this.formatTime = this.formatTime.bind(this);
    }

    formatTime(time) {
        return time.format("h:mm a");
    }

    render() {
        return (
            <div>
                <div className='batchNumber'>{this.props.batch.name}</div>
                <div className='batchDetails'>
                    <span>{this.formatTime(this.props.batch.startTime)} - {this.formatTime(this.props.batch.endTime)}</span>
                    <span>{this.props.batch.totalAttendees} attendees</span>
            </div>
        )
    }
}