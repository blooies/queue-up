import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import InputContainer from './InputContainer.jsx';
import Input from './Input.jsx';
import Select from './Select.jsx';

import { Events } from '../api/events.js';

export default class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {secondStep: false};
        this.fieldNames = ['name', 'location', 'date'];
        this.fieldNamesOnSecondPage = ['startTime', 'endTime', 'attendees', 'attendeesPerBatch', 'minutesPerBatch'];
        this.saveFormValue = this.saveFormValue.bind(this);
        this.goToSecondStep = this.goToSecondStep.bind(this);
        this.saveEvent = this.saveEvent.bind(this);
        this.getTimes = this.getTimes.bind(this);
        this.getHourOptions = this.getHourOptions.bind(this);
        this.getMinuteOptions = this.getMinuteOptions.bind(this);
    }

    saveFormValue(fieldName, value) {
        var state = {};
        state[fieldName] = value;
        this.setState(state);
    }

    isCompleted(fields) {
        var completed = true;
        for (var i=0; i<fields.length; i++) {
            var fieldName = fields[i];
            if (!this.state[fieldName]) {
                completed = false;
            }
        }

        return completed;
    }

    goToSecondStep() {
        var completed = this.isCompleted(this.fieldNames);

        if (completed) {
            this.setState({
                secondStep: true
            })
        }
    }

    saveEvent() {
        var completed = this.isCompleted(this.fieldNamesOnSecondPage);

        if (completed) {
            var self = this;
            var titles = this.fieldNames.push(...this.fieldNamesOnSecondPage);
            var eventInfo = this.fieldNames.reduce((prev, current) => {
                prev[current] = this.state[current];
                return prev;
            }, {});
            
            Meteor.call('events.insert', eventInfo);
            var path = '/';
            browserHistory.push(path); 

            console.log(eventInfo)
            // BatchController.getBatches(eventInfo);
        }
    }

    getTimes(maxTime) {
        var times = [];
        for (var i=0; i<maxTime; i++) {
            var time = {};
            var value = String(i);
            var individualTime = String(i);
            if (i < 10) {
                individualTime = String(0) + String(i);
            }

            time['name'] = individualTime;
            time['value'] = value;
            times.push(time);
        }

        return times;
    }

    getHourOptions() {
        return this.getTimes(24);
    }

    getMinuteOptions() {
        return this.getTimes(60);
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
                        <InputContainer className='split inline'>
                            <Select
                                id='startHour'
                                options={this.getHourOptions()}
                                onChange={this.saveFormValue}
                            />
                            <Select
                                id='startMinute'
                                options={this.getMinuteOptions()}
                                onChange={this.saveFormValue}
                            />
                        </InputContainer>

                        <InputContainer className='split inline'>
                            <Select
                                id='endHour'
                                options={this.getHourOptions()}
                                onChange={this.saveFormValue}
                            />
                            <Select
                                id='endMinute'
                                options={this.getMinuteOptions()}
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
                   
                            <button className='create-new-next' onClick={this.saveEvent}>Finish</button>
                        </InputContainer>
                </div>
            </div>
        )
    }
}