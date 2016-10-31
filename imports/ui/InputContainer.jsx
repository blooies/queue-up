import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';


export default class InputContainer extends Component {
    constructor(props) {
      super(props)
    }

    getClassName() {
        return 'input-container {this.props.className}';
    }

    render() {
      return (
            <div className={this.getClassName}>
                {this.props.children}
            </div>
      )
    }
}
