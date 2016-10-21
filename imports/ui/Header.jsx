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

    // renderHeader() {
    //   let currentUser = this.props.currentUser;
    //   return (
    //     <Header title={this.getTitle()}
    //       currentUser={this.props.currentUser}
    //     />
    //   )
    // }

    render() {
        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="navbar-container">
                    <h4 id='navbar-title'>{this.getTitle()}</h4>
                    { this.props.currentUser ? (
                        <div>
                            <div className='logout-btn' onClick={this.logOut}>Log Out</div>
                            <div className='add-events'>Add Events</div>
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