import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import MessageBox from './Message.jsx';

export default class EmptyEvents extends Component {
    render() {
        return (
          <div className='empty-events'>
            <img src='images/empty_state.png'/>
            <div className='copy'>
              <p>You have no events</p>
              <p>'Tap the + icon to create events.'</p>
            </div>
          </div>
        )
    }
}