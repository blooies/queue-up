import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Events } from '../api/events.js';
import ListEvents from './ListEvents.jsx';
import EmptyEvents from './EmptyEvents.jsx';
import WelcomeGreeting from './WelcomeGreeting.jsx';

export default class Home extends Component {
    renderMainPage() {
      let currentUser = this.props.currentUser;
      let eventsExist = this.props.showEvents;
      if (currentUser && eventsExist) {
        return <ListEvents/>;
      } else if (currentUser) {
        return <EmptyEvents/>
      } else {
        return <WelcomeGreeting/>
      }
    }

    render() {
      return (
        <div>
          {this.renderMainPage()}
        </div>
      )
    }
}

Home.propTypes = {
  showEvents: React.PropTypes.bool.isRequired,
  currentUser: PropTypes.object,
}

export default createContainer(() => {
  return {
    showEvents: !!Events.findOne({}),
    currentUser: Meteor.user()
  }
}, Home);