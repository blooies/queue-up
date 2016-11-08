import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import InputContainer from './InputContainer.jsx';
import Input from './Input.jsx';
import Select from './Select.jsx';

import { browserHistory } from 'react-router';
import { Events } from '../api/events.js';

export default class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondStep: false,
            startHour: 0,
            startMinute: 0,
            endHour: 0,
            endMinute: 0
        };

        this.fieldNames = ['name', 'location', 'date'];
        this.fieldNamesOnSecondPage = ['startHour', 'startMinute', 'endHour', 'endMinute', 'totalAttendees', 'attendeesPerBatch', 'minutesPerBatch'];
        this.saveFormValue = this.saveFormValue.bind(this);
        this.goToSecondStep = this.goToSecondStep.bind(this);
        this.saveEvent = this.saveEvent.bind(this);
        this.getTimes = this.getTimes.bind(this);
        this.getHourOptions = this.getHourOptions.bind(this);
        this.getMinuteOptions = this.getMinuteOptions.bind(this);
    }

    saveFormValue(event) {
        console.log("SAVE FORM VAL", event)
        const fieldName = event.target.id;
        const value = event.target.value;
        var state = {};
        state[fieldName] = value;
        this.setState(state);
    }

    isCompleted(fields) {
        var completed = true;
        for (var i=0; i<fields.length; i++) {
            var fieldName = fields[i];
            if (!this.state[fieldName] && this.state[fieldName] !== 0) {
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
        console.log("inside save event", completed)
        if (completed) {
            var self = this;
            var titles = this.fieldNames.push(...this.fieldNamesOnSecondPage);
            var eventInfo = this.fieldNames.reduce((prev, current) => {
                prev[current] = this.state[current];
                return prev;
            }, {});
            
            Meteor.call('events.insert', eventInfo);
            // var path = '/batches';
            // browserHistory.push(path); 
            window.test = eventInfo;
            var batches = BatchController.getBatches(eventInfo);

            this.props.onSubmit(batches);
            // console.log(eventInfo)
            
        }
    }

    getTimes(maxTime) {
        var times = [];
        for (var i=0; i<maxTime; i++) {
            var time = {};
            var value = i;
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
                        <InputContainer>
                            <div className='split'>
                                <Select
                                    id='startHour'
                                    options={this.getHourOptions()}
                                    onChange={this.saveFormValue}
                                    value='0'
                                />
                                <Select
                                    id='startMinute'
                                    options={this.getMinuteOptions()}
                                    onChange={this.saveFormValue}
                                    value='0'
                                />
                                <label className="col-form-label">Start time</label>
                            </div>
                            <div className='split'>
                            <Select
                                    id='endHour'
                                    options={this.getHourOptions()}
                                    onChange={this.saveFormValue}
                                    value='0'
                                />
                                <Select
                                    id='endMinute'
                                    options={this.getMinuteOptions()}
                                    onChange={this.saveFormValue}
                                    value='0'
                                />
                                <label className="col-form-label">End time</label>
                            </div>
                        </InputContainer>


                        <InputContainer>
                            <Input
                                placeholder='Total number of attendees'
                                id='totalAttendees'
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