// import React, { Component, PropTypes } from 'react';
// import { Meteor } from 'meteor/meteor';
// import classnames from 'classnames';

// export default class Event extends Component {

//     render() {
//         return (
//             <div className='event'>
//                 <h2>{this.props.event.name}</h2>
//             </div>
//         )
//     }
// }

// Event.propTypes = {
//     event: PropTypes.object.isRequired
// }

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

export default class Event extends Component {
    redirectToNumberSubmission() {
       const path = '/submitNumber';
       browserHistory.push(path); 
    }

    render() {
        return (
            <div className='event'>
                <h3>{this.props.event.name}</h3>
                <p>{this.props.event.date}</p>
                <div className='card-tabs'>
                    <div>batch</div>
                    <div className='log-num' onClick={this.redirectToNumberSubmission}>log num</div>
                </div>
            </div>
        );
    }
}

Event.propTypes = {
    event: PropTypes.object.isRequired,
}
