import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

export default class WelcomeGreeting extends Component {
	render() {
		return (
			<div className="story">
			    <h1 id="main-title">QueueUp</h1>
			    An app to help you manage your event's queues more efficiently>
			  </div>
		)
	}
}