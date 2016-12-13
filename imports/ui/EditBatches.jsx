import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { browserHistory } from 'react-router';

import Batch from './Batch.jsx'
import ListBatches from './ListBatches.jsx'

export default class EditBatches extends Component {
    constructor(props) {
        super(props);

        this.getBatches = this.getBatches.bind(this);
        this.getAlert = this.getAlert.bind(this);
    }

    getTimeOverOrToSpare(lastBatch) {
        var plannedEndTime = lastBatch.endTimeOriginal;
        var lastBatchEndTime = lastBatch.endTime;
        var laterTime = plannedEndTime;
        var earlierTime = lastBatchEndTime;

        if (lastBatch.overtime) {
            laterTime = lastBatchEndTime;
            earlierTime = plannedEndTime;
        }

        var hours = moment.duration(laterTime.diff(earlierTime)).hours();
        var minutes = moment.duration(laterTime.diff(earlierTime)).minutes();
        var time;
        if (hours) {
            time = hours + ' hours and ' + minutes + ' minutes';
        } else if (minutes) {
            time = minutes + ' minutes';
        }

        return time;
    }

    getAlert(batches) {
        var overtimeMessage = '';
        var endTimeMessage = '';
        var lastBatch = batches[batches.length - 1];
        var endTime = lastBatch.endTime;
        if (lastBatch.overtime) {
            overtimeMessage += 'You are ' + this.getTimeOverOrToSpare(lastBatch) + ' over time. ';
        } else {
            var time = this.getTimeOverOrToSpare(lastBatch);
            if (time) {
                overtimeMessage += 'Perfect! You have ' + time + ' to spare. ';
            } else {
                overtimeMessage += 'Perfect! You are right on time!';
            }
        }
        endTimeMessage = 'End time will be ' + endTime.format("h:mm a") + '.';

        return {
            overtime: overtimeMessage,
            endTime: endTimeMessage
        }
    }

    renderMessage(batches) {
        var message = this.getAlert(batches);
        var overtimeMessage = message.overtime;
        var endTimeMessage = message.endTime;
        return (
            <div className='alert'>
                <div>{overtimeMessage}</div>
                <div>{endTimeMessage}</div>
            </div>
        )
    }


    getBatches() {
        var eventInfo = this.props.eventInfo;
        if (eventInfo) {
            var batches = BatchController.getBatches(eventInfo);
            return (
                <div>
                    {this.renderMessage(batches)}
                    <ListBatches
                        batches={batches}
                    />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.getBatches()}
                <div className='batch-btns'>
                    <button onClick={this.props.goBackToEdit}>Edit</button>
                    <button onClick={this.props.goBackToEvents}>Confirm</button>
                </div>
            </div>
        )
    }
}