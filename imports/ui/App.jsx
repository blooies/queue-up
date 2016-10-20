import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

// import { Events } from '../api/tasks.js';

import Event from './Event.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   hideCompleted: false,
    // };
  }

  renderEvents() {
    // let filteredTasks = this.props.tasks;
    // if (this.state.hideCompleted) {
    //   filteredTasks = filteredTasks.filter(task => !task.checked);
    // }
    // return filteredTasks.map((task) => {
    //   const currentUserId = this.props.currentUser && this.props.currentUser._id;
    //   const showPrivateButton = task.owner === currentUserId;

      return (
        <Event
          event={event}
        />
      );
    // });
  }

  render() {
    return (
      <div className="container">
          <AccountsUIWrapper />
        <ul>
          {this.renderEvents()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
    events: PropTypes.array.isRequired,
    currentUser: PropTypes.object,
};

export default createContainer(() => {
    Meteor.subscribe('projects');

    return {
        projects: Projects.find({}).fetch(),
        currentUser: Meteor.user(),
    };
}, App);
