import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// // route components
import App from '../../ui/App.jsx';
import CreateEvent from '../../ui/CreateEvent.jsx';
import SubmitNumber from '../../ui/SubmitNumber.jsx';
import AccountsUIWrapper from '../../ui/AccountsUIWrapper.jsx';
// import AppContainer from '../../ui/containers/AppContainer.js';
// import ListPageContainer from '../../ui/containers/ListPageContainer.js';
// import AuthPageSignIn from '../../ui/pages/AuthPageSignIn.js';
// import AuthPageJoin from '../../ui/pages/AuthPageJoin.js';
// import NotFoundPage from '../../ui/pages/NotFoundPage.js';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
    </Route>
    <Route path='/createEvent' component={CreateEvent}>
    </Route>
    <Route path='/submitNumber' component={SubmitNumber}>
    </Route>
    <Route path='/signIn' component={AccountsUIWrapper}>
    </Route>
  </Router>
);