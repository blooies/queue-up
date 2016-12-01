import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Events } from '../api/events.js';

import Event from './Event.jsx';
import Batch from './Batch.jsx';

export default class ListBatches extends Component {
    constructor(props) {
        super(props);
        this.getBatches = this.getBatches.bind(this);
    }
    getBatches() {
      console.log("get batches........")
        var eventInfo = this.props.eventInfo;
        var batches = BatchController.getBatches(eventInfo);
        this.batches = batches;
    }

    render() {
      if (this.props.eventInfo) {
            this.getBatches();
            console.log("BATCHES?", this.batches)
            return this.batches.map((batch) => (
                 <Batch
                    key={batch.name}
                    batch={batch}
                />
            ))
        }
    }
}
