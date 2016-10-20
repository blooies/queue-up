import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class CreateEvent extends Component {
    render() {
        return (
          <div>
            <span>Step 1 of 2</span>
            <div className='input-container'>
                <input className="form-control input-type" type="text" placeholder='Event Name' id="event-name"/>
                <label className="col-form-label">Event Name</label>
            </div>

            <div className='input-container'>
                <input className="form-control input-type" type="text" placeholder='Location' id="location"/>
                <label className="col-form-label">Location</label>
            </div>

            <div className='input-container'>
                <input className="form-control input-type" type="text" placeholder='Date' id="date-picker"/>
                <label className="col-form-label">Date</label>
            </div>

            <button className='create-new-next'>Next</button>
          </div>
        )
    }
}
