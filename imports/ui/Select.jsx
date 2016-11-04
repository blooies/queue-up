import React, { Component, PropTypes } from 'react';

export default class Select extends Component {
    constructor(props) {
        super(props);
        console.log("CONSTRUCTOR SELECT", props.value)
        this.state = {value: props.value}
        this.renderOptions = this.renderOptions.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.id;
        const value = event.target.value;
        this.setState({
            value: value
        })
        this.props.onChange(event);
    }

    renderOptions() {
        var options = this.props.options;
        return options.map((option) => (
            <option
                key={option.value}
                value={option.value}>
                {option.name}
            </option>
        ));
    }

    render() {
        return (
            <div>
                <select value={this.state.value} 
                        onChange={this.handleChange} 
                        className={this.props.className}
                        id={this.props.id}>
                            {this.renderOptions()}
                </select>
                <label className="col-form-label">{this.props.label}</label>
            </div>
        )
    }
}