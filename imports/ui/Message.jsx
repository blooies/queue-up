import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class MessageBox extends Component {
    constructor(props) {
        super(props);
    }

	render() {
        return (
    		<div>
    			<p>{this.props.text}</p>
    		</div>
        )
	}
}