import React, { Component, PropTypes } from 'react';

export default class Select extends Component {
    constructor(props) {
        super(props);
        this.renderOptions = this.renderOptions.bind(this);
    }

    renderOptions() {
        var options = this.props.options;
        return options.map((option) => (
            <option value={option.value}>{option.label}</option>
        ));
    }

    render() {
        return (
            <div>
                <select onChange={this.props.onChange} className={this.props.className}>
                    {this.renderOptions()}
                </select>
            </div>
        )
    }
}