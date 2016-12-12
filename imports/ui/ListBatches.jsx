import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Events } from '../api/events.js';

import Event from './Event.jsx';
import Batch from './Batch.jsx';

export default class ListBatches extends Component {
    constructor(props) {
      console.log("CONSTRUCTOR IN LIST BATCHES....")
        super(props);
        // this.getBatches = this.getBatches.bind(this);
        this.renderBatches = this.renderBatches.bind(this);
    }
    // getBatches() {
    //     var eventInfo = this.props.eventInfo;
    //     var batches = BatchController.getBatches(eventInfo);
    //     this.batches = batches;
    // }
    renderBatches() {
      return this.props.batches.map((batch) => (
           <Batch
              key={batch.name}
              batch={batch}
          />
      ))
    }

    render() {
      console.log("RENDER LIST BATCHES!!!!!", this.props)
      if (this.props.batches) {
          return (
            <div>
              {this.renderBatches()}
            </div>
          )
      }
    }
}
