import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

export default class Event extends Component {

    render() {
        return (
            <div className='event'>
                <h2>{this.props.event.name}</h2>
            </div>
        )
    }
}

Event.propTypes = {
    event: PropTypes.object.isRequired
}