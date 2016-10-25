import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Events } from '../api/events.js';
import Event from './Event.jsx';
import Header from './Header.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';


class App extends Component {
    constructor(props) {
      super(props);
      console.log(this.props.location)
      this.state = {
        location: this.props.location.pathname,
        showBackButton: false
      }
    }

    // componentWillReceiveProps(nextProps) {
    //   if (this.nextProps) {
    //     var showBackButton = this.state.location == this.nextProps.location.pathname;
    //     console.log('set state', showBackButton)
    //     this.setState({
    //       showBackButton: showBackButton
    //     })
    //   }
    //   // // console.log('setting state', showBackButton)
    //   // console.log(this.state)
    //   // console.log(this.nextProps)
    //   // console.log("NExT PROPS", this.state.location)
    //   // console.log("NExT PROPS", this.nextProps.location)
    // }

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
      if (currentUser) {
        return this.renderEvents();
      } else {
        return this.renderWelcome();
      }
    }

    render() {
      return (
        <div>
          <Header showBackButton={this.state.showBackButton}/>
          <div id="main" className="col-md-8 col-xs-12">
            {this.props.children}
          </div>
        </div>
      )
    }
}

App.propTypes = {
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
}, App);