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
        var className = 'batch-details';
        if (this.props.batch.overtime) {
            className += ' overtime';
        }
        return className;
    }

    render() {
        return (
            <div className='batch-container'>
                <div className='batch-number'>{this.props.batch.name}</div>
                <div className={this.getOvertimeClassName()}>
                    <div className='details'>
                        <span>{this.formatTime(this.props.batch.startTime)} - {this.formatTime(this.props.batch.endTime)}</span>
                        <span>{this.props.batch.totalAttendees} attendees</span>
                    </div>
                    <div className='icon'></div>
                </div>
            </div>
        )
    }
}