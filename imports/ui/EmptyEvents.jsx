import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

export default class EmptyEvents extends Component {
    render() {
        return (
          <div className='empty-events'>
            <img src='images/empty_state.png'/>
            <div className='copy'>
              <Message message='You have no events'/>
              <Message message='Tap the '+' icon to create events.'/>
            </div>
          </div>
        )
    }
}