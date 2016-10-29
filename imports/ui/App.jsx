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
      this.state = {
        showBackButton: false,
        location: this.props.location.pathname
      }
    }

    componentWillReceiveProps(nextProps) {
      var showBackButton;
      if (nextProps.location.pathname == '/') {
        showBackButton = false;
      } else {
        showBackButton = !(this.props.location.pathname == nextProps.location.pathname);
      }

      this.setState({
        showBackButton: showBackButton,
        location: nextProps.location.pathname
      })
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