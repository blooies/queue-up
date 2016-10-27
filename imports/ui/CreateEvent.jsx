import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {secondStep: false}
    }

    goToSecondStep() {
        this.setState({
            secondStep: true
        })
    }

    render() {
        return (
            <div>
                <div style={{display: this.state.secondStep ? 'none' : 'block'}}>
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

                    <button className='create-new-next' onClick={this.goToSecondStep}>Next</button>
                 </div>


                <div style={{display: this.state.secondStep ? 'block' : 'none'}}>
                    <span>Step 2 of 2</span>
                    <div className='split input-container'>
                        <div>
                            <input className="form-control input-type" type="text" placeholder='Start time' id="event-name"/>
                            <label className="col-form-label">Start time</label>
                        </div>

                        <div className='end-time'>
                            <input className="form-control input-type" type="text" placeholder='End time' id="event-name"/>
                            <label className="col-form-label">End time</label>
                        </div>
                    </div>

                    <div className='input-container'>
                        <input className="form-control input-type" type="text" placeholder='Total number of attendees' id="event-name"/>
                        <label className="col-form-label">Total number of attendees</label>
                    </div>

                    <div className='input-container'>
                        <input className="form-control input-type" type="text" placeholder='Attendees per batch' id="date"/>
                        <label className="col-form-label">Attendees per batch</label>
                    </div>

                    <div className='input-container'>
                        <input className="form-control input-type" type="text" placeholder='Minutes per batch' id="date"/>
                        <label className="col-form-label">Minutes per batch</label>
                    </div>
                    <button className='create-new-next'>Next</button>
                </div>
            </div>
        )
    }
}
