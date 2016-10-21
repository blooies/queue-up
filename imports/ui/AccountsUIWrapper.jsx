import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class AccountsUIWrapper extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    console.log("in account ", Meteor.user())
    this.view = Blaze.render(Template.atForm,
      ReactDOM.findDOMNode(this.refs.container));
  }
  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  }
  render() {
    // Just render a placeholder container that will be filled in
    return <div className='login-bg'><span ref="container"/></div>;
  }
}