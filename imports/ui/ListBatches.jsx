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
        var eventInfo = this.props.eventInfo;
        var batches = BatchController.getBatches(eventInfo);
        this.batches = batches;
    }
    renderBatches() {
      return this.batches.map((batch) => (
           <Batch
              key={batch.name}
              batch={batch}
          />
      ))
    }

    render() {
      if (this.props.eventInfo) {
            this.getBatches();
            return (
              <div>
                {this.renderBatches()}
              </div>
            )
        }
    }
}
