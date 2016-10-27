import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class CreateEventPartTwo extends Component {
    render() {
        return (
            <div>
                <span>Step 2 of 2</span>
                <div class='split input-container'>
                <div>
                    <input class="form-control input-type" type="text" placeholder='Start time' id="event-name"/>
                    <label class="col-form-label">Start time</label>
                </div>

                <div class='end-time'>
                    <input class="form-control input-type" type="text" placeholder='End time' id="event-name"/>
                    <label class="col-form-label">End time</label>
                </div>
            </div>

            <div class='input-container'>
                <input class="form-control input-type" type="text" placeholder='Total number of attendees' id="event-name"/>
                <label class="col-form-label">Total number of attendees</label>
            </div>

            <div class='input-container'>
                <input class="form-control input-type" type="text" placeholder='Attendees per batch' id="date"/>
                <label class="col-form-label">Attendees per batch</label>
            </div>

            <div class='input-container'>
                <input class="form-control input-type" type="text" placeholder='Minutes per batch' id="date"/>
                <label class="col-form-label">Minutes per batch</label>
            </div>
            <button class='create-new-next'>Next</button>
        )
    }
}
