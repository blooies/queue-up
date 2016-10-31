import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';


export default class Input extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      const name = event.target.id;
      const value = event.target.value;
      this.setState({
        value: event.target.value
      })
      this.props.onChange(name, value);
    }

    render() {
      return (
            <div>
                <input className="form-control input-type"
                      type="text" 
                      placeholder={this.props.placeholder}
                      id={this.props.id}
                      value={this.state.value}
                      onChange={this.handleChange}
                />
                <label className="col-form-label">{this.props.label}</label>
            </div>
      )
    }
}
