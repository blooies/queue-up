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

    getOvertimeClassName() {
        var className = 'batchDetails';
        if (this.props.batch.overtime) {
            className += ' overtime';
        }
        return className;
    }

    render() {
        return (
            <div>
                <div className='batchNumber'>{this.props.batch.name}</div>
                <div className={this.getOvertimeClassName()}>
                    <span>{this.formatTime(this.props.batch.startTime)} - {this.formatTime(this.props.batch.endTime)}</span>
                    <span>{this.props.batch.totalAttendees} attendees</span>
                    <div className='icon'></div>
                </div>
            </div>
        )
    }
}