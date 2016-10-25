import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// // route components
import App from '../../ui/App.jsx';
import CreateEvent from '../../ui/CreateEvent.jsx';
import SubmitNumber from '../../ui/SubmitNumber.jsx';
import AccountsUIWrapper from '../../ui/AccountsUIWrapper.jsx';
import Home from '../../ui/Home.jsx';
// import AppContainer from '../../ui/containers/AppContainer.js';
// import ListPageContainer from '../../ui/containers/ListPageContainer.js';
// import AuthPageSignIn from '../../ui/pages/AuthPageSignIn.js';
// import AuthPageJoin from '../../ui/pages/AuthPageJoin.js';
// import NotFoundPage from '../../ui/pages/NotFoundPage.js';

export default class RenderRoutes extends Component {
    setLocation() {
        this.setState({
            location
        })
    }
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={App} onChange={this.setLocation} showBackButton={this.showBackButton}>
                    <IndexRoute component={Home}/>
                    <Route path='/createEvent' component={CreateEvent}/>
                    <Route path='/submitNumber' component={SubmitNumber}/>
                    <Route path='/signIn' component={AccountsUIWrapper}/>
                </Route>
            </Router>
        )
    }
}