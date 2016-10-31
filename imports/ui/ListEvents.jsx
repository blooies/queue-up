import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Events } from '../api/events.js';

import Event from './Event.jsx';

export default class ListEvents extends Component {
    renderEvents() {
        return this.props.events.map((event) => (
            <Event
                key={event._id}
                event={event}
            />
        ));
    }

    render() {
      return (
          <div>
            {this.renderEvents()}
          </div>
      )
    }
}

ListEvents.propTypes = {
  events: PropTypes.array.isRequired,
}

export default createContainer(() => {
  return {
    events: Events.find({}).fetch(),
  }
}, ListEvents);