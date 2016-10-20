// import React, { Component, PropTypes } from 'react';
// import ReactDOM from 'react-dom';
// import { Meteor } from 'meteor/meteor';
// import { createContainer } from 'meteor/react-meteor-data';

// // import { Events } from '../api/tasks.js';

// import Event from './Event.jsx';
// import AccountsUIWrapper from './AccountsUIWrapper.jsx';

// // App component - represents the whole app
// class App extends Component {
//   constructor(props) {
//     super(props);

//     // this.state = {
//     //   hideCompleted: false,
//     // };
//   }

//   renderEvents() {
//     // let filteredTasks = this.props.tasks;
//     // if (this.state.hideCompleted) {
//     //   filteredTasks = filteredTasks.filter(task => !task.checked);
//     // }
//     // return filteredTasks.map((task) => {
//     //   const currentUserId = this.props.currentUser && this.props.currentUser._id;
//     //   const showPrivateButton = task.owner === currentUserId;

//       return (
//         <Event
//           event={event}
//         />
//       );
//     // });
//   }

//   render() {
//     return (
//       <div className="container">
//           <AccountsUIWrapper />
//         <ul>
//           {this.renderEvents()}
//         </ul>
//       </div>
//     );
//   }
// }

// App.propTypes = {
//     events: PropTypes.array.isRequired,
//     currentUser: PropTypes.object,
// };

// export default createContainer(() => {
//     Meteor.subscribe('projects');

//     return {
//         projects: Projects.find({}).fetch(),
//         currentUser: Meteor.user(),
//     }; 
// }, App);


import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Events } from '../api/events.js';
import Event from './Event.jsx';
import Header from './Header.jsx';

class App extends Component {
    componentDidMount() {
        this.setState({
            title: 'My Events'
        })
    }

    renderEvents() {
      return this.props.events.map((event) => (
        <Event 
            key={event._id}
            event={event}
        />
      ));
    }

    renderEmptyEvents() {
      return (
          <div className='empty-events'>
              <img src='images/empty_state.png'/>
              <div className='copy'>
                  <p>You have no events.</p>
                  <p>Tap the '+' icon to create events.</p>
              </div>
          </div>
      )
    }

    render() {
      return (
        <div className='container'>
            {
              this.props.showEvents ?
                  this.renderEvents() :
                      this.renderEmptyEvents()
            }
        </div>
      )
    }
}

App.propTypes = {
    events: PropTypes.array.isRequired,
    showEvents: React.PropTypes.bool.isRequired
}

export default createContainer(() => {
    return {
        events: Events.find({}).fetch(),
        showEvents: !!Events.findOne({})
    }
}, App);