import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import CreateEvent from './CreateEvent.jsx';
import ListBatches from './ListBatches.jsx';

import { browserHistory } from 'react-router';

export default class CreateEventsAndBatches extends Component {
    constructor(props) {
        super(props);

        this.state = {onCreateEvent: this.props.location.pathname == '/createEvent'};
        this.finishCreatingEvent = this.finishCreatingEvent.bind(this);
    }

    finishCreatingEvent(batches) {
        console.log("FINISH CREATING EVENT")
        this.state.batches = batches;
        this.setState({
            onCreateEvent: false
        })
        console.log("WHAT IS THIS props batches", this)
        browserHistory.push('/batches');
    }

    componentWillReceiveProps(nextProps) {
        console.log("COMP WIL RECEIVE PROPS")
    }

    onCreateEvent() {
        console.log("ON CREATE EVENT")
        return this.props.location.pathname == '/createEvent';
    }

    render() {
        return (
            <div>
                <div style={{display: this.state.onCreateEvent ? 'block' : 'none'}}>
                    <CreateEvent onSubmit={this.finishCreatingEvent}/>
                </div>

                <div style={{display: this.state.onCreateEvent ? 'none' : 'block'}}>
                    <ListBatches batches={this.state.batches}/>
                </div>
            </div>
        )
    }
}