import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

export default class Header extends Component {
    redirectToLogin() {
       const path = '/signIn';
       browserHistory.push(path); 
    }

    logOut() {
        Meteor.logout();
    }

    getTitle() {
      var title;
      if (this.props.currentUser) {
        title = 'My Events';
      } else {
        title = ''
      }

      return title;
    }

    goBack() {
        browserHistory.goBack();
    }

    // componentWillReceiveProps(nextProps) {
    //    if (nextProps.showBackButton) {
    //       this.renderBackButton();
    //    }
    // }

    // renderBackButton() {
    //     if (this.props.showBackButton) {
    //         console.log("this.props.showbackbutton exists")
    //         return <div className='back-btn' onClick={this.goBack}>Back</div>
    //     }
    // }

    addEvents() {
        const path = '/createEvent';
        browserHistory.push(path);
    }

    render() {
        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="navbar-container">
                    <div className='back-btn' style={{display: this.props.showBackButton ? 'none' : 'block'}} onClick={this.goBack}>
                        Back
                    </div>
                    <h4 id='navbar-title'>{this.getTitle()}</h4>
                    { this.props.currentUser ? (
                        <div>
                            <div className='logout-btn' onClick={this.logOut}>Log Out</div>
                            <div className='add-events' onClick={this.addEvents}>Add Events</div>
                            <div className='glyphicon glyphicon-plus'></div>
                        </div>
                    )  : (
                        <div onClick={this.redirectToLogin} className='login-btn'>Sign In</div>
                    )}
                </div>
            </nav>
        );
    }
}

Header.propTypes = {
  currentUser: PropTypes.object,
}

export default createContainer(() => {
  return {
    currentUser: Meteor.user()
  }
}, Header);