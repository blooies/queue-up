import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class SubmitNumber extends Component {
    render() {
        return (
            <div>
                <div className="form-group row">
                    <label htmlFor="example-name-input" className="col-xs-2 col-form-label">First</label>
                    <div className="col-xs-10">
                        <input className="form-control" type="text" id="first-name"/>
                    </div>
                </div> 
                <div className="form-group row">
                    <label htmlFor="example-name-input" className="col-xs-2 col-form-label">Last</label>
                    <div className="col-xs-10">
                        <input className="form-control" type="text" id="last-name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="example-tel-input" className="col-xs-2 col-form-label">Telephone</label>
                    <div className="col-xs-10">
                        <input className="form-control" type="tel" id="number"/>
                    </div>
                </div>
                <button id='submit-num'>Submit</button>
            </div>
        )
    }
}
