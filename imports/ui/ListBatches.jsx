import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { browserHistory } from 'react-router';

import Batch from './Batch.jsx'

export default class ListBatches extends Component {
    constructor(props) {
        super(props);

        this.getAlert = this.getAlert.bind(this);
        this.renderBatches = this.renderBatches.bind(this);
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

    getAlert() {
        console.log("GET MESSAGE")
        if (this.props.batches) {
            var message = '';
            var lastBatch = this.props.batches[this.props.batches.length - 1];
            var endTime = lastBatch.endTime;
            if (lastBatch.overtime) {
                message += 'You are ' + this.getTimeOverOrToSpare(lastBatch) + ' over time. ';
            } else {
                message += 'Perfect! You have ' + this.getTimeOverOrToSpare(lastBatch) + ' to spare. ';
            }
            message +=  'End time will be ' + endTime.format("h:mm a") + '.';

            return message;
        }
    }

    renderBatches() {
        console.log("RENDER BATCHES", this.props, this)
        if (this.props.batches) {
            return this.props.batches.map((batch) => (
                 <Batch
                    key={batch.name}
                    batch={batch}
                />
            ))
        }
    }

    render() {
        return (
            <div>
                <div className='alert'>{this.getAlert()}</div>
                {this.renderBatches()}
                <button>Edit</button>
                <button>Confirm</button>
            </div>
        )
    }
}