import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import CreateEvent from './CreateEvent.jsx';
import EditBatches from './EditBatches.jsx';

import { browserHistory } from 'react-router';

export default class CreateEventsAndBatches extends Component {
    constructor(props) {
        super(props);

        this.state = {onCreateEvent: this.props.location.pathname == '/createEvent'};
        this.finishCreatingEvent = this.finishCreatingEvent.bind(this);
        this.goBackToEdit = this.goBackToEdit.bind(this);
        this.goBackToEvents = this.goBackToEvents.bind(this);
    }

    finishCreatingEvent(eventInfo) {
        this.state.eventInfo = eventInfo;
        this.setState({
            onCreateEvent: false
        })
        console.log("SET STATE", eventInfo)
        browserHistory.push('/batches');
    }

    onCreateEvent() {
        return this.props.location.pathname == '/createEvent';
    }

    goBackToEdit() {
        this.setState({
            onCreateEvent: true
        })
        browserHistory.push('/createEvent');
    }

    goBackToEvents() {
        browserHistory.push('/');
    }

    render() {
        return (
            <div>
                <div style={{display: this.state.onCreateEvent ? 'block' : 'none'}}>
                    <CreateEvent onSubmit={this.finishCreatingEvent}/>
                </div>

                <div style={{display: this.state.onCreateEvent ? 'none' : 'block'}}>
                    <EditBatches
                        eventInfo={this.state.eventInfo}
                    />
                </div>
            </div>
        )
    }
}