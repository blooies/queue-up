import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Events } from '../api/events.js';
import Event from './Event.jsx';
import Header from './Header.jsx';

export default class Home extends Component {
    renderEvents() {
      return this.props.events.map((event) => (
        <Event 
          key={event._id}
          event={event}
        />
      ));
    }

    renderEmptyEvents() {
      return (
        <div className='empty-events'>
          <img src='images/empty_state.png'/>
            <div className='copy'>
              <p>You have no events.</p>
              <p>Tap the '+' icon to create events.</p>
            </div>
        </div>
      )
    }

    renderWelcome() {
      return (
        <div className="story">
          <h1 id="main-title">QueueUp</h1>
          An app to help you manage your event's queues more efficiently.
        </div>
      )
    }

    renderMainPage() {
      let currentUser = this.props.currentUser;
      let eventsExist = this.props.showEvents;
      if (currentUser && eventsExist) {
        return this.renderEvents();
      } else if (currentUser) {
        return this.renderEmptyEvents();
      } else {
        return this.renderWelcome();
      }
    }

    render() {
      return (
        <div id="main" className="col-md-8 col-xs-12">
          {this.renderMainPage()}
        </div>
      )
    }
}

Home.propTypes = {
  events: PropTypes.array.isRequired,
  showEvents: React.PropTypes.bool.isRequired,
  currentUser: PropTypes.object,
}

export default createContainer(() => {
  return {
    events: Events.find({}).fetch(),
    showEvents: !!Events.findOne({}),
    currentUser: Meteor.user()
  }
}, Home);