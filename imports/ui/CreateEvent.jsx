import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import InputContainer from './InputContainer.jsx';
import Input from './Input.jsx';

import { Events } from '../api/events.js';

export default class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {secondStep: false};
        this.fieldNames = ['name', 'location', 'date'];
        this.saveFormValue = this.saveFormValue.bind(this);
        this.goToSecondStep = this.goToSecondStep.bind(this);
    }

    saveFormValue(fieldName, value) {
        var state = {};
        state[fieldName] = value;
        this.setState(state);
    }

    goToSecondStep() {
        var completed = true;
        for (var i=0; i<this.fieldNames.length; i++) {
            var fieldName = this.fieldNames[i];
            if (!this.state[fieldName]) {
                completed = false;
            }
        }

        if (completed) {
            this.setState({
                secondStep: true
            })
        }
    }

    saveEvent(event) {
        var self = this;
        var eventInfo = this.titles.reduce((prev, current) => {
            prev[current] = self.state[current];
            return prev;
        }, {});
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

                 <div style={{display: this.state.secondStep ? 'block' : 'none'}}>
                    <span>Step 2 of 2</span>
                        <InputContainer className='split'>
                            <Input
                                placeholder='Start time'
                                id='startTime'
                                label='Start time'
                                onChange={this.saveFormValue}
                            />
                            <Input
                                placeholder='End time'
                                id='endTime'
                                label='End time'
                                onChange={this.saveFormValue}
                            />
                        </InputContainer>

                        <InputContainer>
                            <Input
                                placeholder='Total number of attendees'
                                id='attendees'
                                label='Total number of attendees'
                                onChange={this.saveFormValue}
                            />

                            <Input
                                placeholder='Attendees per batch'
                                id='attendeesPerBatch'
                                label='Attendees per batch'
                                onChange={this.saveFormValue}
                            />

                            <Input
                                placeholder='Minutes per batch'
                                id='minutesPerBatch'
                                label='Minutes per batch'
                                onChange={this.saveFormValue}
                            />
                   
                            <button className='create-new-next'>Next</button>
                        </InputContainer>
                </div>
            </div>
        )
    }
}