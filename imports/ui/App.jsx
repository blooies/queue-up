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
      console.log(props)

      this.state = {
        title: ''
      }
    }
    // componentDidMount() {
    //   console.log(this.props)
    //   if (this.props.currentUser) {
    //     console.log("HEREEE")
    //     this.setState({
    //       title: 'My Events'
    //     })
    //   } else {
    //     console.log("HERE 2")
    //     this.setState({
    //       title: ''
    //     });
    //   }
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

    render() {
      return (
        <div>
          <Header title={this.state.title}/>
          <div className='container'>
              {
                this.props.showEvents ?
                    this.renderEvents() :
                        this.renderEmptyEvents()
              }
          </div>
        </div>
      )
    }
}

App.propTypes = {
    events: PropTypes.array.isRequired,
    showEvents: React.PropTypes.bool.isRequired,
}

export default createContainer(() => {
    return {
        events: Events.find({}).fetch(),
        showEvents: !!Events.findOne({}),
    }
}, App);