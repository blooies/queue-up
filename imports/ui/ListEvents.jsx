import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Event from './Event.jsx';

export default class ListEvents extends Component {
    render() {
        return this.props.events.map((event) => (
            <Event
                key={event._id}
                event={event}
            />
        ));
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