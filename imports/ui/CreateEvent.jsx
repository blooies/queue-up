import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import InputContainer from './InputContainer.jsx';
import Input from './Input.jsx';

import { Events } from '../api/events.js';

export default class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {secondStep: false};
        this.titles = ['name', 'location', 'date'];
        this.saveFormValue = this.saveFormValue.bind(this);
        this.goToSecondStep = this.goToSecondStep.bind(this);
    }

    saveFormValue(fieldName, value) {
        var state = {};
        state[fieldName] = value;
        console.log('setting state in the create event', state)
        this.setState(state);
    }

    goToSecondStep() {
        this.setState({
            secondStep: true
        })
    }

    saveEvent(event) {
        var self = this;
        var eventInfo = this.titles.reduce((prev, current) => {
            prev[current] = self.state[current];
            return prev;
        }, {});
        console.log(eventInfo)
    }

    render() {
        return (
            <div>
                <div style={{display: this.state.secondStep ? 'none' : 'block'}}>
                    <span>Step 1 of 2</span>
                        <InputContainer>
                            <Input
                                placeholder='Event Name'
                                id='name'
                                label='Event Name'
                                onChange={this.saveFormValue}
                            />
                            <Input
                                placeholder='Location'
                                id='location'
                                label='Location'
                                onChange={this.saveFormValue}
                            />
                            <Input
                                placeholder='Date'
                                id='date'
                                label='Date'
                                onChange={this.saveFormValue}
                            />
                            <button className='create-new-next' onClick={this.goToSecondStep}>
                                Next
                            </button>
                        </InputContainer>
                 </div>
            </div>
        )
    }
}