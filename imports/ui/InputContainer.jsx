import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';


export default class InputContainer extends Component {
    constructor(props) {
      super(props);
      this.getClassName = this.getClassName.bind(this);
    }

    getClassName() {
        var className = this.props.className ? this.props.className : '';
        return 'input-container ' + className;
    }

    render() {
      return (
            <div className={this.getClassName()}>
                {this.props.children}
            </div>
      )
    }
}
